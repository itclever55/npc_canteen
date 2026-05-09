import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:canteen_app/main.dart';

void main() {
  setUpAll(() async {
    SharedPreferences.setMockInitialValues({});
  });

  testWidgets('Landing screen shows role cards', (WidgetTester tester) async {
    await tester.pumpWidget(const NpcCanteenApp());
    await tester.pumpAndSettle();

    expect(find.text('NPC Canteen'), findsOneWidget);
    expect(find.text('Customer'), findsOneWidget);
    expect(find.text('Trader'), findsOneWidget);
  });
}
