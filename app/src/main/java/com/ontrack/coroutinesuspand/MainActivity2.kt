package com.ontrack.coroutinesuspand

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlin.system.measureTimeMillis


class MainActivity2 : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        GlobalScope.launch {
            val time = measureTimeMillis {
                val one = sampleOne()
                val two = sampleTwo()
                println("The answer is ${one + two}")
            }
            println("Completed in $time ms")
        }
        println("EOF")
    }

    private suspend fun sampleOne(): Int {
        println( "sampleOne"+System.currentTimeMillis())
        delay(1000L) // pretend we are doing something useful here
        return 10
    }

    private suspend fun sampleTwo(): Int {
        println( "sampleTwo"+System.currentTimeMillis())
        delay(1000L) // pretend we are doing something useful here, too
        return 10
    }
}
