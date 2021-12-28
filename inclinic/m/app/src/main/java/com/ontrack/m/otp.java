package com.ontrack.m;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class otp extends AppCompatActivity {
    Button b1;
    TextView t11;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_otp);
        b1 = findViewById(R.id.button);
        t11 = findViewById(R.id.t6);
        b1.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {

                Intent intent = new Intent(otp.this, MainActivity2.class);
                startActivity(intent);
            }


        });
        t11.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(otp.this, verify.class);
                startActivity(intent);
            }


        });
    }

    }
