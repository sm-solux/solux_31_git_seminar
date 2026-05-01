package com.example.study_week3.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.KeyboardArrowDown
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.study_week3.data.SampleData
import com.example.study_week3.ui.components.ScheduleItemRow
import com.example.study_week3.ui.theme.*

@Composable
fun ScheduleScreen() {
    var selectedDay by remember { mutableIntStateOf(10) }
    val weekDays  = listOf(5, 6, 7, 8, 9, 10, 11)
    val dayLabels = listOf("일", "월", "화", "수", "목", "금", "토")

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(CosmosBackground)
    ) {
        // ── 파란 헤더 + 주간 캘린더 ──────────────────────────────
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(CosmosBlue)
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .statusBarsPadding()
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 20.dp, vertical = 16.dp),
                    horizontalArrangement = Arrangement.Center,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "전체일정",
                        color = Color.White,
                        fontSize = 18.sp,
                        fontWeight = FontWeight.SemiBold
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Icon(
                        imageVector = Icons.Filled.KeyboardArrowDown,
                        contentDescription = null,
                        tint = Color.White,
                        modifier = Modifier.size(20.dp)
                    )
                    Spacer(modifier = Modifier.weight(1f))
                    Text(text = "오늘", color = Color.White, fontSize = 14.sp)
                }

                // 주간 날짜 바
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 8.dp, vertical = 8.dp),
                    horizontalArrangement = Arrangement.SpaceEvenly
                ) {
                    dayLabels.forEachIndexed { idx, label ->
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Text(
                                text = label,
                                fontSize = 12.sp,
                                color = Color.White.copy(alpha = 0.8f)
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Box(
                                modifier = Modifier.size(32.dp),
                                contentAlignment = Alignment.Center
                            ) {
                                if (weekDays[idx] == selectedDay) {
                                    Box(
                                        modifier = Modifier
                                            .size(32.dp)
                                            .background(Color.White, RoundedCornerShape(50))
                                    )
                                }
                                Text(
                                    text = weekDays[idx].toString(),
                                    fontSize = 14.sp,
                                    fontWeight = if (weekDays[idx] == selectedDay) FontWeight.Bold else FontWeight.Normal,
                                    color = if (weekDays[idx] == selectedDay) CosmosBlue else Color.White
                                )
                            }
                            Spacer(modifier = Modifier.height(4.dp))
                            Box(
                                modifier = Modifier
                                    .size(5.dp)
                                    .background(Color.White.copy(alpha = 0.7f), RoundedCornerShape(50))
                            )
                        }
                    }
                }
                Spacer(modifier = Modifier.height(8.dp))
            }
        }

        // ── 날짜 레이블 ───────────────────────────────────────────
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(Color(0xFFF2F4F7))
                .padding(horizontal = 20.dp, vertical = 10.dp)
        ) {
            Text(
                text = "4월 10일 금요일",
                fontSize = 13.sp,
                color = CosmosTextSecondary,
                fontWeight = FontWeight.Medium
            )
        }

        // ── 일정 목록 ─────────────────────────────────────────────
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .background(Color.White)
        ) {
            items(SampleData.scheduleItems) { item ->
                ScheduleItemRow(item = item)
            }
        }
    }
}