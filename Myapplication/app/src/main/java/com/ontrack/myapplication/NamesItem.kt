package com.ontrack.myapplication

import com.google.gson.annotations.SerializedName


class NamesItem(
    @SerializedName("id")
    var id: Int,
    @SerializedName("title")
    var title: String,
)