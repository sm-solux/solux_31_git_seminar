package com.example.study_week2.ui.screens

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.study_week2.data.SkillItem
import com.example.study_week2.data.skills
import com.example.study_week2.ui.components.BulletText
import com.example.study_week2.ui.components.SectionTitle
import com.example.study_week2.ui.theme.*

@Composable
fun SkillScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(horizontal = 16.dp, vertical = 8.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        SkillBarsCard()
        LearningStyleCard()
        Spacer(Modifier.height(8.dp))
    }
}

@Composable
private fun SkillBarsCard() {
    SectionTitle("배우고 있는 기술")
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = CardBg),
        elevation = CardDefaults.cardElevation(0.dp)
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(20.dp)
        ) {
            skills.forEach { SkillBar(it) }
        }
    }
}

@Composable
private fun SkillBar(skill: SkillItem) {
    var started by remember { mutableStateOf(false) }
    val animatedProgress by animateFloatAsState(
        targetValue = if (started) skill.percent / 100f else 0f,
        animationSpec = tween(durationMillis = 900),
        label = "progress_${skill.name}"
    )
    LaunchedEffect(Unit) { started = true }

    Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text(skill.name, fontWeight = FontWeight.SemiBold, fontSize = 14.sp, color = TextPrimary)
            Text("${skill.percent}%", fontSize = 13.sp, color = skill.color, fontWeight = FontWeight.Bold)
        }
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(8.dp)
                .clip(RoundedCornerShape(4.dp))
                .background(Color(0xFFE5E7EB))
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth(animatedProgress)
                    .fillMaxHeight()
                    .clip(RoundedCornerShape(4.dp))
                    .background(skill.color)
            )
        }
    }
}

@Composable
private fun LearningStyleCard() {
    SectionTitle("학습 스타일")
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = CardBg),
        elevation = CardDefaults.cardElevation(0.dp)
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            BulletText("배운 개념을 바로 코드로 옮기고 프로젝트에 적용하면서 이해를 확장하는 편")
            BulletText("기록하면서 공부하는 습관이 있음")
            BulletText("지속적으로 학습하고, 부족한 부분을 보완해 나가는 스타일")
        }
    }
}