package com.ontrack.m;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class forgotpassword extends AppCompatActivity {
Button btn;
TextView t1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_forgotpassword);
        btn=findViewById(R.id.b1);
        t1=findViewById(R.id.signup);
        btn.setOnClickListener(new View.OnClickListener() {
                                   @Override
                                   public void onClick(View v) {

                                       Intent intent = new Intent(forgotpassword.this, otp.class);
                                       startActivity(intent);
                                   }
                               });



        t1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(forgotpassword.this,MainActivity2.class);
                startActivity(intent);
            }


        });

    }
}