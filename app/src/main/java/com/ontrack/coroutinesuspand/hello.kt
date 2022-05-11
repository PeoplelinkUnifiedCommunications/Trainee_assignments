package com.ontrack.coroutinesuspand


import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import kotlinx.coroutines.*

class hello : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        main()

    }


    fun main() {
        println("Hello, ")
        GlobalScope.launch {
            doSomething()
        }

        runBlocking {
            delay(3000L) // only used to keep the JVM alive
        }
    }
    suspend fun doSomething() {
        delay(2000L)
        print("this is an example for using launch when async doesn't return anything!!!")
    }
}