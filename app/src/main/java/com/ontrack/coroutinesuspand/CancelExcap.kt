package com.ontrack.coroutinesuspand

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import kotlinx.coroutines.*

class CancelExcap : AppCompatActivity() {


    override  fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        main()
    }
    fun main()= runBlocking {
        eva()
        println("Done")
    }
}
    suspend fun eva(): Unit = coroutineScope {
        val job = Job()
        launch(job) {
            try {
                repeat(1_000) { i ->
                    delay(10)
                    println("Printing $i")
                }
            } catch (e: CancellationException) {
                println(e)
                throw e
            }
        }
        delay(1100)
        job.cancelAndJoin()
        println("Cancelled successfully")
        delay(1000)
    }
