import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    const title = 'Gesture Demonstration';

    return const MaterialApp(
      title: title,
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({ super.key });

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String _message = "Double Tap or Swipe";

  void _changeMessageOnSwipe(DragUpdateDetails details) {
    setState(() {
      if(details.delta.dx > 0) {
        _message = "Swipe Right";
      } else {
        _message = "Swipe Left";
      }
    });
  }
  
  void _showDoubleTapMessage() {
    setState(() {
      _message = "Double Tap";
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Gesture Demonstration"),
      ),
      body: Center(
        child: GestureDetector(
          onDoubleTap: _showDoubleTapMessage,
          onPanUpdate: _changeMessageOnSwipe,
          child: Container(
            width: 200,
            height: 200,
            color: Colors.blue,
            alignment: Alignment.center,
            child: Text(
              _message,
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white, fontSize: 20),
            ),
          ),
        ),
      ),
    );
  }

}
