package com.ontrack.newmvvm

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class MainViewModel constructor(private val repository: MainRepository) : ViewModel() {

    val tittleList = MutableLiveData<List<UserData>>()
    val errorMsg = MutableLiveData<String>()
    fun getTitles() {
        val response = repository.getTitles()
        response.enqueue(object : Callback<List<UserData>> {
            override fun onResponse(
                call: Call<List<UserData>>,
                response: Response<List<UserData>>
            ) {
                tittleList.postValue(response.body())
            }

            override fun onFailure(call: Call<List<UserData>>, t: Throwable) {
                errorMsg.postValue(t.message)
            }
        })
    }

}