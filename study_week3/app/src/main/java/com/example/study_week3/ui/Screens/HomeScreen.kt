package com.example.study_week3.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.study_week3.data.SampleData
import com.example.study_week3.ui.components.CourseCard
import com.example.study_week3.ui.components.ProfileHeader
import com.example.study_week3.ui.components.SectionTitle
import com.example.study_week3.ui.theme.CosmosBackground

@Composable
fun HomeScreen() {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(CosmosBackground)
    ) {
        item {
            ProfileHeader(
                name = "유하연",
                statusMessage = "(시험? 그게 무슨 말이야. 꿈꿨어?)Oo.. 지금은 시험 범위 확인할 시간! ⏰"
            )
        }
        item {
            SectionTitle(text = "현재진행강좌")
        }
        items(SampleData.currentCourses) { course ->
            CourseCard(course = course)
        }
        item {
            Spacer(modifier = Modifier.height(16.dp))
        }
    }
}