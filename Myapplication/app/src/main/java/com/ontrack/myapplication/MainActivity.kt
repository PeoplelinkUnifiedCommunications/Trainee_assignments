package com.ontrack.myapplication

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.ProgressBar
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class MainActivity : AppCompatActivity() {


    val TAG = MainActivity::class.java.name

    val itemList = ArrayList<NamesItem>()
    lateinit var adapter: NamesAdapter
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        adapter = NamesAdapter()
        val idlv: RecyclerView = findViewById(R.id.idlv)
        idlv.adapter = adapter
        loadData()
    }

    private fun loadData() {
        val Loadinglv: ProgressBar = findViewById(R.id.Loadinglv)
        Loadinglv.visibility = View.VISIBLE

        ApiManager.getInstance().service.listNames()
            .enqueue(object : Callback<List<NamesItem>> {

                override fun onResponse(
                    call: Call<List<NamesItem>>,
                    response: Response<List<NamesItem>>,
                ) {
                    itemList.clear()
                    val listData: List<NamesItem> = response.body()!!
                    Log.d("API_RESPONSE", "onResponse: " + response)
                    Loadinglv.visibility = View.GONE

            itemList.addAll(listData)
                    adapter.updateData(itemList)


                }

                override fun onFailure(call: Call<List<NamesItem>>, t: Throwable) {


                    Log.e(TAG, "Error on loading data${t.message}")
                    Loadinglv.visibility = View.GONE

                }

            })
    }

}



