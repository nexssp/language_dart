// Nexss PROGRAMMER 2.0.0 - Dart
// Default template for JSON Data

import 'dart:io';
import 'dart:convert';

void main() {
  var NexssStdin = stdin.readLineSync();
  var NexssStdout = jsonDecode(NexssStdin);

  NexssStdout['test'] = "test";

  print(jsonEncode(NexssStdout));
}