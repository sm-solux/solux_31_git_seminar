package com.example.study_week2.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.study_week2.ui.components.SectionTitle
import com.example.study_week2.ui.theme.*

@Composable
fun HomeScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(horizontal = 16.dp, vertical = 8.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        ProfileCard()
        InterestCard()
        AboutMeCard()
        KeywordsCard()
        Spacer(Modifier.height(8.dp))
    }
}

@Composable
private fun ProfileCard() {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(20.dp))
            .background(Brush.linearGradient(listOf(Color(0xFF7C6FFF), PrimaryPurple)))
            .padding(20.dp)
    ) {
        Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                Box(
                    modifier = Modifier
                        .size(56.dp)
                        .clip(CircleShape)
                        .background(Color.White.copy(alpha = 0.25f)),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        Icons.Outlined.Person,
                        contentDescription = null,
                        tint = Color.White,
                        modifier = Modifier.size(32.dp)
                    )
                }
                Column {
                    Text("유하연", fontWeight = FontWeight.Bold, fontSize = 20.sp, color = Color.White)
                    Text("ERP 시스템을 아우르는 풀스택 개발자", fontSize = 13.sp, color = Color.White.copy(alpha = 0.85f))
                }
            }
            Text(
                "ERP 도메인에 대한 이해를 바탕으로, 백엔드와 프론트엔드를 아우르는 풀스택 개발 역량을 키워 실무 전반을 책임질 수 있는 개발자가 되기 위해 공부하고 있습니다.",
                fontSize = 13.sp, color = Color.White.copy(alpha = 0.9f), lineHeight = 20.sp
            )
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically
            ) {
                ProfileChip("전공\n컴퓨터과학", Modifier.width(100.dp))   // ← 여기
                Spacer(Modifier.width(16.dp))
                ProfileChip("관심\nKotlin", Modifier.width(100.dp))      // ← 여기
                Spacer(Modifier.width(16.dp))
                ProfileChip("성향\n열정적", Modifier.width(100.dp))       // ← 여기
            }
        }
    }
}

@Composable
private fun ProfileChip(text: String, modifier: Modifier) {
    Box(
        modifier = Modifier
            .clip(RoundedCornerShape(12.dp))
            .background(Color.White.copy(alpha = 0.2f))
            .padding(horizontal = 16.dp, vertical = 10.dp),
        contentAlignment = Alignment.Center
    ) {
        Text(text, fontSize = 13.sp, color = Color.White, textAlign = TextAlign.Center, lineHeight = 18.sp)
    }
}

@Composable
private fun InterestCard() {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = CardBg),
        elevation = CardDefaults.cardElevation(0.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth().padding(16.dp),
            horizontalArrangement = Arrangement.SpaceEvenly
        ) {
            InterestItem(Icons.Outlined.School,  "학습")
            InterestItem(Icons.Outlined.Palette, "UI")
            InterestItem(Icons.Outlined.Groups,  "협업")
        }
    }
}

@Composable
private fun InterestItem(icon: ImageVector, label: String) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(6.dp)
    ) {
        Box(
            modifier = Modifier
                .size(44.dp)
                .clip(RoundedCornerShape(12.dp))
                .background(LightPurple),
            contentAlignment = Alignment.Center
        ) {
            Icon(icon, contentDescription = label, tint = PrimaryPurple, modifier = Modifier.size(22.dp))
        }
        Text(label, fontSize = 12.sp, color = TextSecondary)
    }
}

@Composable
private fun AboutMeCard() {
    SectionTitle("About Me")
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = CardBg),
        elevation = CardDefaults.cardElevation(0.dp)
    ) {
        Text(
            "저는 ERP 도메인에 대한 이해를 바탕으로, 백엔드와 프론트엔드를 아우르는 풀스택 개발 역량을 갖추기 위해 학습하고 있습니다. 단순한 기능 구현을 넘어 데이터 흐름과 시스템 구조를 고려하며, 배운 내용을 직접 구현해보며 실무에 적용할 수 있는 역량을 키우는 것이 저의 강점입니다.",
            modifier = Modifier.padding(16.dp),
            fontSize = 14.sp, color = TextSecondary, lineHeight = 22.sp
        )
    }
}

@Composable
private fun KeywordsCard() {
    SectionTitle("핵심 키워드")
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = CardBg),
        elevation = CardDefaults.cardElevation(0.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth().padding(16.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            listOf("UI 설계", "비교 구현", "사용자 중심", "꾸준한 성장").forEach { kw ->
                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(20.dp))
                        .background(LightPurple)
                        .padding(horizontal = 12.dp, vertical = 6.dp)
                ) {
                    Text(kw, fontSize = 12.sp, color = PrimaryPurple, fontWeight = FontWeight.Medium)
                }
            }
        }
    }
}