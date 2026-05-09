#!/usr/bin/env python3
import argparse
import atexit
import http.client
import os
import signal
import socket
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parent
FRONTEND_DIR = ROOT_DIR / "Front_End"
BACKEND_DIR = ROOT_DIR / "Back_End"
BACKEND_PORT = 3000


def parse_addrport(value: str) -> tuple[str, int]:
    if not value:
        return "127.0.0.1", 8000

    if ":" not in value:
        return "127.0.0.1", int(value)

    host, port = value.rsplit(":", 1)
    host = host or "127.0.0.1"
    return host, int(port)


def wait_for_port(host: str, port: int, timeout: float = 10.0) -> bool:
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            with socket.create_connection((host, port), timeout=1):
                return True
        except OSError:
            time.sleep(0.25)
    return False


def terminate_process(process: subprocess.Popen | None) -> None:
    if not process or process.poll() is not None:
        return

    try:
        if os.name == "nt":
            process.send_signal(signal.CTRL_BREAK_EVENT)
            process.wait(timeout=3)
        else:
            process.terminate()
            process.wait(timeout=3)
    except Exception:
        process.kill()


def start_backend() -> subprocess.Popen | None:
    if not BACKEND_DIR.exists():
        raise FileNotFoundError(f"Backend folder not found: {BACKEND_DIR}")

    if wait_for_port("127.0.0.1", BACKEND_PORT, timeout=1.0):
        return None

    creationflags = 0
    if os.name == "nt":
        creationflags = subprocess.CREATE_NEW_PROCESS_GROUP

    process = subprocess.Popen(
        ["node", "server.js"],
        cwd=BACKEND_DIR,
        creationflags=creationflags,
    )

    if not wait_for_port("127.0.0.1", BACKEND_PORT, timeout=10):
        terminate_process(process)
        raise RuntimeError("Backend did not start on port 3000.")

    return process


class NPCRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(FRONTEND_DIR), **kwargs)

    def do_GET(self):
        if self.path == "/api" or self.path.startswith("/api/"):
            self._proxy_request()
            return

        if self.path in ("/", ""):
            self.path = "/index.html"

        super().do_GET()

    def do_POST(self):
        if self.path == "/api" or self.path.startswith("/api/"):
            self._proxy_request()
            return
        self.send_error(405, "Method not allowed")

    def do_PUT(self):
        if self.path == "/api" or self.path.startswith("/api/"):
            self._proxy_request()
            return
        self.send_error(405, "Method not allowed")

    def do_DELETE(self):
        if self.path == "/api" or self.path.startswith("/api/"):
            self._proxy_request()
            return
        self.send_error(405, "Method not allowed")

    def log_message(self, format, *args):
        sys.stdout.write("%s - - [%s] %s\n" % (self.address_string(), self.log_date_time_string(), format % args))

    def _proxy_request(self):
        target_url = f"http://127.0.0.1:{BACKEND_PORT}{self.path}"
        body = None
        content_length = int(self.headers.get("Content-Length", "0"))
        if content_length:
            body = self.rfile.read(content_length)

        headers = {
            key: value
            for key, value in self.headers.items()
            if key.lower() not in {"host", "connection", "content-length"}
        }

        request = urllib.request.Request(
            target_url,
            data=body,
            headers=headers,
            method=self.command,
        )

        try:
            with urllib.request.urlopen(request) as response:
                payload = response.read()
                self.send_response(response.status)
                for key, value in response.getheaders():
                    if key.lower() in {"transfer-encoding", "connection", "server", "date"}:
                        continue
                    self.send_header(key, value)
                self.send_header("Content-Length", str(len(payload)))
                self.end_headers()
                self.wfile.write(payload)
        except urllib.error.HTTPError as error:
            payload = error.read()
            self.send_response(error.code)
            self.send_header("Content-Type", error.headers.get("Content-Type", "application/json"))
            self.send_header("Content-Length", str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)
        except Exception as error:
            message = f'{{"message":"Proxy error","detail":"{error}"}}'.encode("utf-8")
            self.send_response(502)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(message)))
            self.end_headers()
            self.wfile.write(message)


def runserver(addrport: str) -> int:
    host, port = parse_addrport(addrport)

    if not FRONTEND_DIR.exists():
        print(f"Frontend folder not found: {FRONTEND_DIR}")
        return 1

    try:
        backend_process = start_backend()
    except Exception as error:
        print(f"Could not start backend: {error}")
        return 1

    atexit.register(lambda: terminate_process(backend_process))

    server = ThreadingHTTPServer((host, port), NPCRequestHandler)
    print(f"NPC Canteen running at http://{host}:{port}")
    print(f"Frontend: {FRONTEND_DIR}")
    print(f"Backend proxy: http://127.0.0.1:{BACKEND_PORT}/api")
    print("Press Ctrl+C to stop.")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
    finally:
        server.server_close()
        terminate_process(backend_process)

    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="NPC Canteen development launcher")
    subparsers = parser.add_subparsers(dest="command")

    runserver_parser = subparsers.add_parser("runserver", help="Start frontend and backend")
    runserver_parser.add_argument("addrport", nargs="?", default="127.0.0.1:8000")

    args = parser.parse_args()

    if args.command == "runserver":
        return runserver(args.addrport)

    parser.print_help()
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
