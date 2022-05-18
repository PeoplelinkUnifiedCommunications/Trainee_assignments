package com.ontrack.navigation

import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.google.android.material.bottomnavigation.BottomNavigationView


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)



        val FirstFragment = FirstFragment()
        val SecondFragment = SecondFragment()
        val ThirdFragment = ThirdFragment()

        setCurrentFragment(FirstFragment)

        val bottomNavigationView = findViewById<BottomNavigationView
                >(R.id.bottomNavigationView)

        bottomNavigationView.setOnNavigationItemSelectedListener {
            when (it.itemId) {

                R.id.home -> setCurrentFragment(FirstFragment)
                R.id.person -> setCurrentFragment(SecondFragment)
                R.id.settings -> setCurrentFragment(ThirdFragment)

            }
            true

        }
    }

    private fun setCurrentFragment(fragment: Fragment) =
        supportFragmentManager.beginTransaction().apply {
            replace(R.id.flFragment, fragment)
            commit()

        }
}







