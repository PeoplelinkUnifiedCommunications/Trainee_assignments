import 'package:flutter/material.dart';


void main() {
  runApp(MaterialApp(home: Calculator()));
}

class Calculator extends StatefulWidget {
  @override
  _CalculatorState createState() => _CalculatorState();
}

class _CalculatorState extends State<Calculator> {
  var theResult, firstNum, secondNum;
  void divideTheNums() {
    setState(() {
      theResult = firstNum / secondNum;
    });
  }

  void multiplyTheNums() {
    setState(() {
      theResult = firstNum * secondNum;
    });
  }

  void addTheNums() {
    setState(() {
      theResult = firstNum + secondNum;
    });
  }

  void subtractTheNums() {
    setState(() {
      theResult = firstNum - secondNum;
    });
  }

  Widget build(BuildContext context) {
    return Scaffold(
      //resizeToAvoidBottomPadding: false,
      appBar: AppBar(
        backgroundColor: Colors.redAccent,
        centerTitle: true,
        title: Text(
          "Calculator",
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Container(
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Text(
                      "OutPut:",
                      style: TextStyle(
                          fontSize: 25.0, fontWeight: FontWeight.w700),
                    ),
                    Text(theResult.toString()),
                    Container(
                        margin: EdgeInsets.only(bottom: 30.0), child: Text(""))
                  ],
                ),
                Container(
                  margin: EdgeInsets.only(bottom: 20.0),
                  child: TextField(
                    controller: TextEditingController(),
                    decoration: InputDecoration(
                        hintText: "Enter First Number:",
                        border: OutlineInputBorder()),
                  ),
                ),
                TextField(
                  controller: TextEditingController(),
                  decoration: InputDecoration(
                      hintText: "Enter Second Number:",
                      border: OutlineInputBorder()),
                ), Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: <Widget>[
                    Container(
                      margin: EdgeInsets.only(right: 20.0),
                      child: RaisedButton(
                        color: Colors.redAccent,
                        onPressed: divideTheNums,
                        child: Text(
                          "/",
                          style: TextStyle(color: Colors.white, fontSize: 23.0),
                        ),
                      ),
                    ),
                    Container(
                      margin: EdgeInsets.only(),
                      child: RaisedButton(
                        color: Colors.redAccent,
                        onPressed: multiplyTheNums,
                        child: Text(
                          "*",
                          style: TextStyle(color: Colors.white, fontSize: 23.0),
                        ),
                      ),
                    )
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: <Widget>[
                    Container(
                      margin: EdgeInsets.only(right: 20.0, top: 20.0),
                      child: RaisedButton(
                        color: Colors.redAccent,
                        highlightColor: Colors.white,
                        onPressed: subtractTheNums,
                        child: Text(
                          "-",
                          style: TextStyle(color: Colors.white, fontSize: 23.0),
                        ),
                      ),
                    ),
                    Container(
                      margin: EdgeInsets.only(top: 20.0),
                      child: RaisedButton(
                        color: Colors.redAccent,
                        onPressed: addTheNums,
                        child: Text(
                          "+",
                          style: TextStyle(color: Colors.white, fontSize: 23.0),
                        ),
                      ),
                    )
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}