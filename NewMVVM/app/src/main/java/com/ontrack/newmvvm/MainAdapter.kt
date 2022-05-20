package com.ontrack.newmvvm

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.ontrack.newmvvm.databinding.AdapterCountBinding

class MainAdapter: RecyclerView.Adapter<MainViewHolder>() {
    var entries = mutableListOf<UserData>()
    fun setTitleList(name: List<UserData>) {
        this.entries = name.toMutableList()
        notifyDataSetChanged()
    }
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MainViewHolder {
        val inflater = LayoutInflater.from(parent.context)
        val binding = AdapterCountBinding.inflate(inflater, parent, false)
        return MainViewHolder(binding)
    }
    override fun onBindViewHolder(holder: MainViewHolder, position: Int) {
        val title = entries[position]
        holder.binding.API.text = title.entries.toString()
    }
    override fun getItemCount(): Int {
        return entries.size
    }
}
class MainViewHolder(val binding: AdapterCountBinding) : RecyclerView.ViewHolder(binding.root) {
}