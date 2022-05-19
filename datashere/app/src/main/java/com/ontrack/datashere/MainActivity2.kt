package com.ontrack.datashere

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity2 : AppCompatActivity() {
    private var sharedPrefFile = "data"
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main2)

        val name = findViewById<TextView>(R.id.nametv)
        val email = findViewById<TextView>(R.id.emailtv)
        val phone = findViewById<TextView>(R.id.phonetv)
        val back = findViewById<Button>(R.id.backbtn)

        val sharedPreferences: SharedPreferences = this.getSharedPreferences(sharedPrefFile,
            Context.MODE_PRIVATE)
        val sharedNameValue = sharedPreferences.getString("name_key", "name")
        val sharedNameValue1 = sharedPreferences.getString("email_key", "email")
        val sharedNameValue2 = sharedPreferences.getString("phone_key", "phone")
        name.setText(sharedNameValue)
        email.setText(sharedNameValue1)
        phone.setText(sharedNameValue2)

        back.setOnClickListener(View.OnClickListener {
           finishAffinity()
        })
    }
}