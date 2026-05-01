package com.example.study_week1

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.*

import com.example.study_week1.ui.screen.LoginScreen
import com.example.study_week1.ui.screen.SignupScreen

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            AppRoot()
        }
    }
}

@Composable
fun AppRoot() {
    var currentScreen by remember { mutableStateOf("login") }

    when (currentScreen) {
        "login" -> LoginScreen(onNavigateToSignup = { currentScreen = "signup" })
        "signup" -> SignupScreen(onNavigateToLogin = { currentScreen = "login" })
    }
}