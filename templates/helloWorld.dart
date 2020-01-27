// Nexss PROGRAMMER 2.0.0 - Dart
// HelloWorld template for JSON Data

import 'dart:io';
import 'dart:convert';

void main() {
  var NexssStdin = stdin.readLineSync(encoding: Encoding.getByName('utf-8'));
  var NexssStdout = jsonDecode(NexssStdin);

  NexssStdout['HelloFromDart'] = Platform.version;

  print(jsonEncode(NexssStdout));
}
