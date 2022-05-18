package com.ontrack.coroutinesuspand

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import kotlinx.coroutines.*
import kotlinx.coroutines.Dispatchers.Main

class Fact : AppCompatActivity() {

    val TAG:String = "Main Activity"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val job = GlobalScope.launch(Dispatchers.Main) {
            Log.d(TAG, "Starting the long calculation...")
            for(i in 30..40)
            {
                if(isActive)
                    Log.d(TAG, "Result for i =$i : ${fib(i)}")
            }
            Log.d(TAG, "Ending the long calculation...")
        }

        runBlocking {
            delay(500)
            job.cancel()
            Log.d(TAG, "Main Thread is Running")
        }
    }

    fun fib(n:Int):Long
    {
        return if(n==0) 0
        else if(n==1) 1
        else fib(n-1) + fib(n-2)
    }
}

