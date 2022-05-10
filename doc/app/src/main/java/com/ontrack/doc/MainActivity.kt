package com.ontrack.doc

import android.Manifest
import android.content.pm.PackageManager
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.annotation.RequiresApi
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    var roomUrlString = "https://app.invc.vc/" // Replace by your own
    private val roomParameters = "" //Replace by any parameter you want


    companion object {
        private const val PERMISSION_REQUEST_CODE = 1234
    }

    private val requiredDangerousPermissions = arrayOf(
        Manifest.permission.CAMERA,
        Manifest.permission.MODIFY_AUDIO_SETTINGS,
        Manifest.permission.RECORD_AUDIO
    )


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        WebViewUtils.configureWebView(webView!!)
        webView!!.webChromeClient = CustomWebChromeClient(this)
        webView!!.webViewClient = WebViewClient()

        webView!!.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView, url: String): Boolean {
                view.loadUrl(url)
                return true
            }

            override fun onPageFinished(view: WebView, url: String) {
                progressBar.visibility = View.GONE
            }

            override fun doUpdateVisitedHistory(view: WebView, url: String, isReload: Boolean) {
                super.doUpdateVisitedHistory(view, url, isReload)
            }

            override fun onReceivedError(
                view: WebView, errorCode: Int, description: String,
                failingUrl: String) {

            }
        }
    }

    override fun onResume() {
        super.onResume()
        if (webView!!.url == null) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && isPendingPermissions()) {
                // This explicitly requests the camera and audio permissions.
                // It's fine for a demo app but should probably be called earlier in the flow,
                // on a user interaction instead of onResume.
                requestCameraAndAudioPermissions()
            } else {
                loadEmbeddedRoomUrl()
            }
        }
    }

    private fun loadEmbeddedRoomUrl() {
        webView!!.loadUrl(roomUrlString + roomParameters)
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<String>, grantResults: IntArray) {
        when (requestCode) {
            PERMISSION_REQUEST_CODE -> if (grantResultsContainsDenials(grantResults)) {
                // Show some permissions required dialog.
            } else {
                // All necessary permissions granted, continue loading.
                loadEmbeddedRoomUrl()
            }
            else -> super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    private fun requestCameraAndAudioPermissions() {
        requestPermissions(pendingPermissions, PERMISSION_REQUEST_CODE)
    }

    @get:RequiresApi(api = Build.VERSION_CODES.M)
    private val pendingPermissions: Array<String>
        get() {
            val pendingPermissions: MutableList<String> = ArrayList()
            for (permission in requiredDangerousPermissions) {
                if (checkSelfPermission(permission) == PackageManager.PERMISSION_DENIED) {
                    pendingPermissions.add(permission)
                }
            }
            return pendingPermissions.toTypedArray()
        }

    private fun isPendingPermissions(): Boolean {
        return if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
            false
        } else pendingPermissions.isNotEmpty()
    }

    private fun grantResultsContainsDenials(grantResults: IntArray): Boolean {
        for (result in grantResults) {
            if (result == PackageManager.PERMISSION_DENIED) {
                return true
            }
        }
        return false
    }
    override fun onBackPressed() {

        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
            finish()
        }
    }
}
