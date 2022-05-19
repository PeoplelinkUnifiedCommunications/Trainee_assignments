package com.ontrack.navigationgraph

import android.content.Intent
import android.os.Bundle
import android.text.TextUtils.replace
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.fragment.app.FragmentManager
import androidx.fragment.app.FragmentTransaction
import androidx.navigation.Navigation
import androidx.navigation.Navigator
import androidx.navigation.findNavController
import androidx.navigation.fragment.NavHostFragment

// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
private const val ARG_PARAM1 = "param1"
private const val ARG_PARAM2 = "param2"

class FirstFragment : Fragment() {


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?,
    ): View? {

        val view = inflater.inflate(R.layout.fragment_first, container, false)

        var button = view.findViewById<Button>(R.id.btnfm)
        // Inflate the layout for this fragment
        button.setOnClickListener {
            Navigation.findNavController(view)
                .navigate(R.id.action_navigation_welcome_to_sceond_nav)

        }

        return view

    }

}
