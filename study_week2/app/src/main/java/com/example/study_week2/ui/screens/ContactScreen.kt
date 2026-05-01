package com.example.study_week2.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.study_week2.data.ContactItem
import com.example.study_week2.data.contacts
import com.example.study_week2.ui.components.IconBox
import com.example.study_week2.ui.components.SectionTitle
import com.example.study_week2.ui.theme.*

@Composable
fun ContactScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(horizontal = 16.dp, vertical = 8.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        ContactListCard()
        GoalCard()
        Spacer(Modifier.height(8.dp))
    }
}

@Composable
private fun ContactListCard() {
    SectionTitle("연락처 & 링크")
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = CardBg),
        elevation = CardDefaults.cardElevation(0.dp)
    ) {
        Column(modifier = Modifier.padding(8.dp)) {
            contacts.forEachIndexed { i, item ->
                ContactRow(item)
                if (i < contacts.lastIndex) {
                    HorizontalDivider(
                        color = Color(0xFFF0F0F0),
                        thickness = 1.dp,
                        modifier = Modifier.padding(horizontal = 16.dp)
                    )
                }
            }
        }
    }
}

@Composable
private fun ContactRow(item: ContactItem) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 14.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(14.dp)
    ) {
        IconBox(icon = item.icon, size = 40, iconSize = 20)
        Column(verticalArrangement = Arrangement.spacedBy(2.dp)) {
            Text(item.label, fontSize = 11.sp, color = TextSecondary)
            Text(item.value, fontSize = 14.sp, color = TextPrimary, fontWeight = FontWeight.Medium)
        }
    }
}

@Composable
private fun GoalCard() {
    SectionTitle("한 줄 목표")
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(20.dp))
            .background(DarkBg)
            .padding(20.dp)
    ) {
        Text(
            "ERP 도메인에 대한 깊은 이해를 바탕으로, 백엔드와 프론트를 아우르며 실무 전반을 책임질 수 있는 풀스택 개발자로 성장하는 것이 목표입니다.",
            fontSize = 15.sp,
            color = Color.White,
            lineHeight = 24.sp,
            fontWeight = FontWeight.Medium
        )
    }
}