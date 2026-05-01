package com.example.study_week3.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.outlined.Logout
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.Icon
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.example.study_week3.ui.components.CosmosHeader
import com.example.study_week3.ui.components.MoreMenuItem
import com.example.study_week3.ui.theme.CosmosTextSecondary

@Composable
fun MoreScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.White)
    ) {
        CosmosHeader(title = "더보기")

        LazyColumn(modifier = Modifier.fillMaxSize()) {
            item {
                MoreMenuItem(title = "공지사항", icon = {
                    Icon(Icons.Outlined.Campaign, null, tint = CosmosTextSecondary, modifier = Modifier.size(18.dp))
                })
            }
            item {
                MoreMenuItem(title = "Q&A", icon = {
                    Icon(Icons.Outlined.ChatBubbleOutline, null, tint = CosmosTextSecondary, modifier = Modifier.size(18.dp))
                })
            }
            item {
                MoreMenuItem(title = "웹 브라우저로 접속하기", icon = {
                    Icon(Icons.Outlined.Language, null, tint = CosmosTextSecondary, modifier = Modifier.size(18.dp))
                })
            }
            item {
                MoreMenuItem(title = "언어설정", trailingText = "한글", icon = {
                    Icon(Icons.Outlined.Translate, null, tint = CosmosTextSecondary, modifier = Modifier.size(18.dp))
                })
            }
            item {
                MoreMenuItem(title = "알림", icon = {
                    Icon(Icons.Outlined.NotificationsNone, null, tint = CosmosTextSecondary, modifier = Modifier.size(18.dp))
                })
            }
            item {
                MoreMenuItem(title = "프로그램 정보", icon = {
                    Icon(Icons.Outlined.Info, null, tint = CosmosTextSecondary, modifier = Modifier.size(18.dp))
                })
            }
            item {
                MoreMenuItem(title = "개선 및 오류 문의", icon = {
                    Icon(Icons.Outlined.SpeakerNotes, null, tint = CosmosTextSecondary, modifier = Modifier.size(18.dp))
                })
            }
            item {
                MoreMenuItem(title = "본인인증 관리", icon = {
                    Icon(Icons.Outlined.Lock, null, tint = CosmosTextSecondary, modifier = Modifier.size(18.dp))
                })
            }
            item {
                MoreMenuItem(title = "로그아웃", icon = {
                    Icon(Icons.AutoMirrored.Outlined.Logout, null, tint = CosmosTextSecondary, modifier = Modifier.size(18.dp))
                })
            }
            item {
                MoreMenuItem(title = "다른 계정 추가", icon = {
                    Icon(Icons.Outlined.PersonAdd, null, tint = CosmosTextSecondary, modifier = Modifier.size(18.dp))
                })
            }
        }
    }
}