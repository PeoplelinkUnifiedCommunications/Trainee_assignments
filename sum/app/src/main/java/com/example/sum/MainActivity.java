package com.example.sum;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends Activity {

    public String str ="";
    Character op = 'q';
    int i,num,numtemp;
    EditText showResult;

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        showResult = (EditText)findViewById(R.id.result_id);

    }
    public void btn0Clicked(View v){
        insert(0);
    }
    public void btn1Clicked(View v){
        insert(1);
    }
    public void btn2Clicked(View v){
        insert(2);
    }
    public void btn3Clicked(View v){
        insert(3);
    }
    public void btn4Clicked(View v){
        insert(4);
    }
    public void btn5Clicked(View v){
        insert(5);
    }

    public void btn6Clicked(View v){
        insert(6);
    }
    public void btn7Clicked(View v){
        insert(7);
    }
    public void btn8Clicked(View v){
        insert(8);
    }
    public void btn9Clicked(View v){
        insert(9);
    }
    public void btnplusClicked(View v){
        perform();
        op = '+';
    }
    public void btnminusClicked(View v){
        perform();
        op = '-';
    }
    public void btndivideClicked(View v){
        perform();
        op = '/';
    }
    public void btnmultiClicked(View v){
        perform();
        op = '*';

    }
    public void btnequalClicked(View v){
        calculate();
    }

    public void btnclearClicked(View v){
        reset();
    }
    private void reset() {
        str ="";
        op ='q';
        num = 0;
        numtemp = 0;
        showResult.setText("");
    }
    private void insert(int j) {
        str = str+Integer.toString(j);
        num = Integer.valueOf(str).intValue();
        showResult.setText(str);

    }
    private void perform() {
        str = "";
        numtemp = num;
    }
    private void calculate() {
        if(op == '+')
            num = numtemp+num;
        else if(op == '-')
            num = numtemp-num;
        else if(op == '/')
            num = numtemp/num;
        else if(op == '*')
            num = numtemp*num;
        showResult.setText(""+num);
    }
}

