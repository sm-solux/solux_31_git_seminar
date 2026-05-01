package com.example.study_week3

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.study_week3.ui.screens.*
import com.example.study_week3.ui.theme.*

// ── Tab 정의 ──────────────────────────────────────────────────────
sealed class CosmosTab(val route: String, val label: String) {
    object Home         : CosmosTab("home",         "홈")
    object Chat         : CosmosTab("chat",         "대화")
    object Notification : CosmosTab("notification", "알림")
    object Schedule     : CosmosTab("schedule",     "일정")
    object More         : CosmosTab("more",         "더보기")
}

// ── Activity ──────────────────────────────────────────────────────
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            CosmosTheme {
                Surface(modifier = Modifier.fillMaxSize()) {
                    CosmosApp()
                }
            }
        }
    }
}

// ── Root Composable ───────────────────────────────────────────────
@Composable
fun CosmosApp() {
    var selectedTab by remember { mutableStateOf<CosmosTab>(CosmosTab.Home) }

    Scaffold(
        bottomBar = {
            CosmosBottomBar(
                selectedTab     = selectedTab,
                unreadChatCount = 7,
                onTabSelected   = { selectedTab = it }
            )
        },
        containerColor = CosmosBackground
    ) { paddingValues ->
        Box(modifier = Modifier.padding(paddingValues)) {
            when (selectedTab) {
                CosmosTab.Home         -> HomeScreen()
                CosmosTab.Chat         -> ChatScreen()
                CosmosTab.Notification -> NotificationScreen()
                CosmosTab.Schedule     -> ScheduleScreen()
                CosmosTab.More         -> MoreScreen()
            }
        }
    }
}

// ── Bottom Navigation Bar ─────────────────────────────────────────
@Composable
fun CosmosBottomBar(
    selectedTab: CosmosTab,
    unreadChatCount: Int,
    onTabSelected: (CosmosTab) -> Unit
) {
    val tabs = listOf(
        CosmosTab.Home,
        CosmosTab.Chat,
        CosmosTab.Notification,
        CosmosTab.Schedule,
        CosmosTab.More
    )

    NavigationBar(
        containerColor = Color.White,
        tonalElevation = 8.dp
    ) {
        tabs.forEach { tab ->
            val isSelected = selectedTab == tab

            NavigationBarItem(
                selected = isSelected,
                onClick  = { onTabSelected(tab) },
                icon = {
                    Box(contentAlignment = Alignment.TopStart) {
                        Icon(
                            imageVector = when (tab) {
                                CosmosTab.Home         -> if (isSelected) Icons.Filled.Home          else Icons.Outlined.Home
                                CosmosTab.Chat         -> if (isSelected) Icons.Filled.Chat          else Icons.Outlined.Chat
                                CosmosTab.Notification -> if (isSelected) Icons.Filled.Notifications else Icons.Outlined.Notifications
                                CosmosTab.Schedule     -> if (isSelected) Icons.Filled.CalendarMonth else Icons.Outlined.CalendarMonth
                                CosmosTab.More         -> Icons.Filled.MoreHoriz
                            },
                            contentDescription = tab.label,
                            modifier = Modifier.size(24.dp)
                        )
                        if (tab == CosmosTab.Chat && unreadChatCount > 0) {
                            Badge(
                                modifier = Modifier
                                    .align(Alignment.TopEnd)
                                    .offset(x = 8.dp, y = (-4).dp),
                                containerColor = CosmosBadgeRed
                            ) {
                                Text(
                                    text = unreadChatCount.toString(),
                                    color = Color.White,
                                    fontSize = 10.sp
                                )
                            }
                        }
                    }
                },
                label = {
                    Text(
                        text = tab.label,
                        fontSize = 10.sp,
                        fontWeight = if (isSelected) FontWeight.SemiBold else FontWeight.Normal
                    )
                },
                colors = NavigationBarItemDefaults.colors(
                    selectedIconColor   = CosmosTabSelected,
                    selectedTextColor   = CosmosTabSelected,
                    unselectedIconColor = CosmosTabUnselected,
                    unselectedTextColor = CosmosTabUnselected,
                    indicatorColor      = Color.Transparent
                )
            )
        }
    }
}