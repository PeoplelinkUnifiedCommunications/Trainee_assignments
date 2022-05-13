package com.ontrack.myapplication

data class ResponseData<T>(
    val code: Int,
    val data: T
)
