import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(
    home: TogglePage(),
  ));
}

class TogglePage extends StatefulWidget {
  const TogglePage({super.key});

  @override
  State<TogglePage> createState() => _TogglePageState();
}

class _TogglePageState extends State<TogglePage> {
  bool isRVU = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("College Toggle")),
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              isRVU ? "RVU" : "RVCE",
              style: const TextStyle(fontSize: 30),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  isRVU = !isRVU;
                });
              },
              child: const Text("Toggle"),
            ),
          ],
        ),
      ),
    );
  }
}