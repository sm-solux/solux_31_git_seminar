package com.example.study_week3.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import com.example.study_week3.data.SampleData
import com.example.study_week3.ui.components.ChatRow
import com.example.study_week3.ui.components.CosmosHeader

@Composable
fun ChatScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.White)
    ) {
        CosmosHeader(title = "대화")
        LazyColumn(modifier = Modifier.fillMaxSize()) {
            items(SampleData.chatMessages) { msg ->
                ChatRow(message = msg)
            }
        }
    }
}