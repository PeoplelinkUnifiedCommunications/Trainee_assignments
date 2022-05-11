package com.ontrack.coroutinesuspand

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.async
import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking

class ManiActivity3 : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        main()
    }

    fun main() {
        runBlocking {
            val firstResult: Deferred<Boolean> = async {
                isFirstCriteriaMatch()
            }

            val secondResult: Deferred<Boolean> = async {
                isSecondCriteriaMatch()
            }

            if (firstResult.await() && secondResult.await()) {
                println("All criteria matched, go ahead!")
            } else {
                println("One of the criteria unmatched, sorry!")
            }
        }

    }

    suspend fun isFirstCriteriaMatch(): Boolean {
        delay(1000L) // simulate long running task
        return true
    }

    suspend fun isSecondCriteriaMatch(): Boolean {
        delay(1000L) // simulate long running task
        return false
    }
}
