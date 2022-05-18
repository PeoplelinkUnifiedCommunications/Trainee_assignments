package com.ontrack.coroutinesuspand

import android.content.ContentValues.TAG
import kotlinx.coroutines.*
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

class Dispatch: AppCompatActivity() {

    val TAG: String = "Main Activity"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        runBlocking {


           launch(Dispatchers.Main) {
              Log.d(TAG, "Main dispatcher. Thread:")
            }
            launch(Dispatchers.Unconfined) {
                Log.d(TAG, "Unconfined1. Thread: ${Thread.currentThread().name}")
                delay(1000)
                Log.d(TAG, "Unconfined2. Thread: ${Thread.currentThread().name}")
            }
            launch(Dispatchers.Default) {
                Log.d(TAG, "Default. Thread: ${Thread.currentThread().name}")
            }
            launch(Dispatchers.IO) {
                Log.d(TAG, "IO. Thread: ${Thread.currentThread().name}")
            }
            launch(newSingleThreadContext("MyThread")) {
                Log.d(TAG, "newSingleThreadContext. Thread: ${Thread.currentThread().name}")

            }
        }
    }
}
