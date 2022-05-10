package com.ontrack.doc

import android.annotation.SuppressLint
import android.webkit.CookieManager
import android.webkit.WebView

object WebViewUtils {
    @SuppressLint("SetJavaScriptEnabled")
    fun configureWebView(webView: WebView) {
        val webSettings = webView.settings
        webSettings.javaScriptEnabled = true
        webSettings.domStorageEnabled = true
        webSettings.databaseEnabled = true
        webSettings.mediaPlaybackRequiresUserGesture = false
        CookieManager.getInstance().setAcceptCookie(true)
        CookieManager.getInstance().setAcceptThirdPartyCookies(webView, true)
    }
}