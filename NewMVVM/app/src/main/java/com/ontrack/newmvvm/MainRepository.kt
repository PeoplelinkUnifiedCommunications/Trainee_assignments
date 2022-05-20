package com.ontrack.newmvvm

class MainRepository constructor(private val retrofitService: RetrofitService) {
    fun getTitles() = retrofitService.getTitles()
}
