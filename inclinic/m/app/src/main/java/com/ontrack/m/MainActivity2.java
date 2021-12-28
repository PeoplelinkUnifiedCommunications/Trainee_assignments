package com.ontrack.m;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.view.View;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.auth.api.credentials.Credentials;

public class MainActivity2 extends AppCompatActivity {
    Button b1;
    EditText ed1, ed2;
    TextView t1,t2;
    int counter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);


        b1=findViewById(R.id.b1);
        t1=findViewById(R.id.item1);
        t2=findViewById(R.id.signup);

        Spinner spinner = findViewById(R.id.lanSpinner);
        String[] spinnerArray={"English","Hindi"};
        ArrayAdapter<String> spinnerArrayAdapter = new ArrayAdapter<String>
                (this, android.R.layout.simple_spinner_item,
                        spinnerArray); //selected item will look like a spinner set from XML
        spinnerArrayAdapter.setDropDownViewResource(android.R.layout
                .simple_spinner_dropdown_item);
        spinner.setAdapter(spinnerArrayAdapter);



        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (ed1.getText().toString().equals("") &&
                        ed2.getText().toString().equals("")) {
                    Intent intent = new Intent(MainActivity2.this, reg.class);
                    startActivity(intent);
                }



        }

        });
        t1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity2.this,forgotpassword.class);
                startActivity(intent);
            }


        });

        t2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity2.this,signup.class);
                startActivity(intent);
            }


        });
    };
}
