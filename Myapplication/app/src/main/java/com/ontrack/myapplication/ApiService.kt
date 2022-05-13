package com.ontrack.myapplication

import retrofit2.Call
import retrofit2.Response
import retrofit2.http.GET

interface ApiService {
    @GET("api/books")
    fun listNames(): Call<List<NamesItem>>

}