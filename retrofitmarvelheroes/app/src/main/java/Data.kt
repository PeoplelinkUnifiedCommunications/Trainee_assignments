package com.thesimplycoder.retrofitmarvelheroes

data class ResponseData<T> (
    val code: Int,
    val data: T
)