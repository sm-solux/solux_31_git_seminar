package com.example.study_week2.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.study_week2.data.ActivityItem
import com.example.study_week2.data.activities
import com.example.study_week2.ui.components.IconBox
import com.example.study_week2.ui.components.SectionTitle
import com.example.study_week2.ui.theme.CardBg
import com.example.study_week2.ui.theme.TextPrimary
import com.example.study_week2.ui.theme.TextSecondary

@Composable
fun ActivityScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(horizontal = 16.dp, vertical = 8.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        SectionTitle("최근 활동")
        activities.forEach { ActivityCard(it) }
        Spacer(Modifier.height(8.dp))
    }
}

@Composable
private fun ActivityCard(item: ActivityItem) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = CardBg),
        elevation = CardDefaults.cardElevation(0.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            horizontalArrangement = Arrangement.spacedBy(14.dp),
            verticalAlignment = Alignment.Top
        ) {
            IconBox(icon = item.icon)
            Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                Text(item.title, fontWeight = FontWeight.SemiBold, fontSize = 15.sp, color = TextPrimary)
                Text(item.desc, fontSize = 13.sp, color = TextSecondary, lineHeight = 20.sp)
            }
        }
    }
}