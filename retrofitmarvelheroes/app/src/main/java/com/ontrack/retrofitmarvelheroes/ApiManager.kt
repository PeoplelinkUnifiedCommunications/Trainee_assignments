package com.ontrack.retrofitmarvelheroes

import android.icu.util.TimeUnit
import android.util.Log
import javax.xml.datatype.DatatypeConstants.SECONDS
import kotlin.time.DurationUnit

class ApiManager {
    private var apiService: ApiService? = null
    init {
        createService()
    }
    val service: ApiService get() = apiService!!
    private fun createService() {
        val loggingInterceptor =
            HttpLoggingInterceptor(object : HttpLoggingInterceptor.Logger {
                override fun log(message: String) {
                    Log.i("Retrofit", message)
                }
            })
        loggingInterceptor.level = HttpLoggingInterceptor.Level.BODY
        val client = OkHttpClient.Builder()
            .readTimeout(30, DurationUnit.SECONDS)
            .connectTimeout(30, DurationUnit.SECONDS)
            .writeTimeout(30, DurationUnit.SECONDS)
            .addInterceptor(loggingInterceptor)
            .build()
        val retrofit: Retrofit = Retrofit.Builder()
            .client(client)
            .baseUrl("https://secret-cliffs-40396.herokuapp.com/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
        apiService = retrofit.create<ApiService>(ApiService::class.java)
    }
    companion object {
        private var instance: ApiManager? = null
        fun getInstance(): ApiManager {
            return instance ?: synchronized(this) {
                ApiManager().also { instance = it }
            }
        }
    }
}