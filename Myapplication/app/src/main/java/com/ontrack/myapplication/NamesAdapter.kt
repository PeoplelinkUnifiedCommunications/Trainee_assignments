package com.ontrack.myapplication

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class NamesAdapter : RecyclerView.Adapter<NamesAdapter.ViewHolder>() {

    private lateinit var itemList: List<NamesItem>
    lateinit var context: Context

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        context = parent.context
        val view = LayoutInflater.from(context).inflate(R.layout.namelist, parent, false)
        return ViewHolder(view)
    }

    override fun getItemCount(): Int {
        return if (::itemList.isInitialized) itemList.size else 0
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.bind()
    }

    fun updateData(list: List<NamesItem>) {
        itemList = list;
        notifyDataSetChanged()
    }

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {

        fun bind() {
            val item = itemList.get(adapterPosition)

            val idTv: TextView = itemView.findViewById(R.id.idTv)
            val nameTv: TextView = itemView.findViewById(R.id.nameTv)
            idTv.text = item.id.toString()
            nameTv.text = item.title

        }

    }
}