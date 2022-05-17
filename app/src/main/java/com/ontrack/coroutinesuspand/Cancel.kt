package com.ontrack.coroutinesuspand

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

class Cancel : AppCompatActivity(){
    override  fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
         main()
    }
     fun main()= runBlocking {
         dowo()
         println("Done")
     }
    }
      suspend fun dowo(): Unit = coroutineScope {
          val job = launch {
              repeat(1000) { i ->
                  delay(10)
                  println("Printing $i")
              }
          }

          delay(1100)
          job.cancel()
          job.join()
          println("Cancelled successfully")
      }