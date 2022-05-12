package com.ontrack.retrofitmarvelheroes


import android.telecom.Call
import com.thesimplycoder.retrofitmarvelheroes.ResponseData
import retrofit2.Call
import retrofit2.http.GET
interface ApiService {
    @GET("marvel-heroes")
    fun listHeroes(): Call<ResponseData<List<Superhero>>>
}
