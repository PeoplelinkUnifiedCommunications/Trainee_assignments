package com.ontrack.datashere

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import androidx.core.content.ContextCompat

class MainActivity : AppCompatActivity() {
    private val sharedPrefFile = "data"
    val MyPREFERENCES = "MyPrefs"


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val name = findViewById<EditText>(R.id.nameet)
        val email = findViewById<EditText>(R.id.mailet)
        val phoneno = findViewById<EditText>(R.id.phoneet)
        val submit = findViewById<Button>(R.id.subbtn)
        val sharedPreferences: SharedPreferences = this.getSharedPreferences(sharedPrefFile,
            Context.MODE_PRIVATE)

        submit.setOnClickListener(View.OnClickListener {
            intent = Intent(this, MainActivity2::class.java)
            startActivity(intent)


            val names: String = name.text.toString()
            val emails: String = email.text.toString()
            val phones: String = phoneno.text.toString()
            val editor: SharedPreferences.Editor = sharedPreferences.edit()
            editor.putString("name_key", names)
            editor.putString("email_key", emails)
            editor.putString("phone_key", phones)
            editor.apply()
            editor.commit()
        })
    }
}



