package com.example.study_week2.data

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.*
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import com.example.study_week2.ui.theme.OrangeColor
import com.example.study_week2.ui.theme.PrimaryPurple
import com.example.study_week2.ui.theme.TealColor

// ────────────────────────────────────────────
// Data Classes
// ────────────────────────────────────────────
data class NavItem(val label: String, val icon: ImageVector)
data class SkillItem(val name: String, val percent: Int, val color: Color)
data class ActivityItem(val icon: ImageVector, val title: String, val desc: String)
data class ContactItem(val icon: ImageVector, val label: String, val value: String)

// ────────────────────────────────────────────
// Mock Data
// ────────────────────────────────────────────
val navItems = listOf(
    NavItem("홈",   Icons.Outlined.Home),
    NavItem("기술", Icons.Outlined.Star),
    NavItem("활동", Icons.Outlined.WorkOutline),
    NavItem("연락", Icons.Outlined.MailOutline),
)

val skills = listOf(
    SkillItem("Kotlin",    15, PrimaryPurple),
    SkillItem("React",      20, Color(0xFF7C6FFF)),
    SkillItem("HTML / CSS", 83, TealColor),
    SkillItem("JavaScript", 62, OrangeColor),
)

val activities = listOf(
    ActivityItem(Icons.Outlined.WebAsset,     "자기소개 웹페이지 제작",   "정적인 웹 레이아웃과 정보 구조를 직접 구성해보며 Kotlin을 연습했습니다."),
    ActivityItem(Icons.Outlined.PhoneAndroid, "Kotlin 화면 클론 연습", "회원가입, 로그인, 프로필 화면을 위젯 기반으로 구현하며 앱 UI 감각을 익혔습니다."),
    ActivityItem(Icons.Outlined.Groups,       "스터디 및 팀 활동",       "서로의 코드를 비교하고 피드백을 반영하며 협업의 중요성을 체감했습니다."),
)

val contacts = listOf(
    ContactItem(Icons.Outlined.MailOutline, "Email",  "hayeonyu.1@sookmyung.ac.kr"),
    ContactItem(Icons.Outlined.Code,        "GitHub", "github.com/Heoooooo"),
    ContactItem(Icons.Outlined.Article,     "Blog",   "velog.io/@snow-ui-log"),
)