package com.example.study_week2

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.study_week2.data.navItems
import com.example.study_week2.ui.screens.*
import com.example.study_week2.ui.theme.*

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            MyIntroTheme {
                MyIntroApp()
            }
        }
    }
}

@Composable
fun MyIntroApp() {
    var selectedTab by remember { mutableStateOf(0) }

    Scaffold(
        containerColor = BgGray,
        topBar = { AppTopBar() },
        bottomBar = { AppBottomBar(selectedTab) { selectedTab = it } }
    ) { padding ->
        Box(Modifier.padding(padding)) {
            when (selectedTab) {
                0 -> HomeScreen()
                1 -> SkillScreen()
                2 -> ActivityScreen()
                3 -> ContactScreen()
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AppTopBar() {
    TopAppBar(
        title = {
            Text("My Intro", fontWeight = FontWeight.Bold, fontSize = 18.sp, color = TextPrimary)
        },
        actions = {
            IconButton(onClick = {}) {
                Icon(Icons.Outlined.Notifications, contentDescription = "알림", tint = TextSecondary)
            }
            IconButton(onClick = {}) {
                Icon(Icons.Outlined.MoreHoriz, contentDescription = "더보기", tint = TextSecondary)
            }
        },
        colors = TopAppBarDefaults.topAppBarColors(containerColor = BgGray)
    )
}

@Composable
fun AppBottomBar(selected: Int, onSelect: (Int) -> Unit) {
    NavigationBar(containerColor = SurfaceWhite, tonalElevation = 0.dp) {
        navItems.forEachIndexed { index, item ->
            NavigationBarItem(
                selected = selected == index,
                onClick = { onSelect(index) },
                icon = {
                    Box(
                        modifier = Modifier
                            .size(40.dp)
                            .clip(CircleShape)
                            .background(if (selected == index) LightPurple else Color.Transparent),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            item.icon,
                            contentDescription = item.label,
                            tint = if (selected == index) PrimaryPurple else TextSecondary,
                            modifier = Modifier.size(22.dp)
                        )
                    }
                },
                label = {
                    Text(
                        item.label,
                        fontSize = 11.sp,
                        color = if (selected == index) PrimaryPurple else TextSecondary
                    )
                },
                colors = NavigationBarItemDefaults.colors(indicatorColor = Color.Transparent)
            )
        }
    }
}