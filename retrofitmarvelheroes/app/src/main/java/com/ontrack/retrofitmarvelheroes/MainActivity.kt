package com.ontrack.retrofitmarvelheroes

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.telecom.Call
import android.util.Log
import android.view.View
import javax.security.auth.callback.Callback

class MainActivity : AppCompatActivity() {
    val TAG = MainActivity::class.java.name
    val itemList = ArrayList<Superhero>()
    lateinit var adapter: SuperheroAdapter
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        // initialize adapter
        adapter = SuperheroAdapter()
        rvData.adapter = adapter
        // call api to get the data from network
        loadData()
    }
    private fun loadData() {
        // show loading progress bar
        pbLoading.visibility = View.VISIBLE
        ApiManager.getInstance().service.listHeroes()
            .enqueue(object : Callback<ResponseData<List<Superhero>>> {
                override fun onResponse(
                    call: Call<ResponseData<List<Superhero>>>,
                    response: Response<ResponseData<List<Superhero>>>
                ) {
                    val listData: List<Superhero> = response.body()!!.data
                    // updating data from network to adapter
                    itemList.clear()
                    itemList.addAll(listData)
                    adapter.updateData(itemList)
                    // hide loading progress bar
                    pbLoading.visibility = View.GONE
                }
                override fun onFailure(call: Call<ResponseData<List<Superhero>>>, t: Throwable) {
                    // if there is error while get data from network
                    Log.e(TAG, "Error on loading data")
                    pbLoading.visibility = View.GONE
                }
            })
    }
}