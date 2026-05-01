package com.example.study_week3.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.study_week3.data.*
import com.example.study_week3.ui.theme.*

// ─────────────────────────────────────────────────────────────────
// CosmosHeader  — 대화·알림·더보기 탭 상단 파란 헤더
// ─────────────────────────────────────────────────────────────────
@Composable
fun CosmosHeader(
    title: String,
    modifier: Modifier = Modifier,
    content: (@Composable RowScope.() -> Unit)? = null
) {
    Box(
        modifier = modifier
            .fillMaxWidth()
            .background(CosmosBlue)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .statusBarsPadding()
                .padding(horizontal = 20.dp, vertical = 16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center
        ) {
            Text(
                text = title,
                color = Color.White,
                fontSize = 18.sp,
                fontWeight = FontWeight.SemiBold
            )
        }
        content?.let {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .statusBarsPadding()
                    .padding(horizontal = 20.dp, vertical = 16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) { it() }
        }
    }
}

// ─────────────────────────────────────────────────────────────────
// ProfileHeader  — 홈 탭 상단 프로필 헤더
// ─────────────────────────────────────────────────────────────────
@Composable
fun ProfileHeader(
    name: String,
    statusMessage: String,
    modifier: Modifier = Modifier
) {
    Box(
        modifier = modifier
            .fillMaxWidth()
            .background(CosmosBlue)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .statusBarsPadding()
                .padding(horizontal = 20.dp, vertical = 24.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = name,
                    color = Color.White,
                    fontSize = 26.sp,
                    fontWeight = FontWeight.Bold
                )
                Spacer(modifier = Modifier.height(6.dp))
                Text(
                    text = statusMessage,
                    color = Color.White.copy(alpha = 0.85f),
                    fontSize = 13.sp,
                    lineHeight = 18.sp
                )
            }
            Spacer(modifier = Modifier.width(16.dp))
            Box(
                modifier = Modifier
                    .size(56.dp)
                    .clip(CircleShape)
                    .background(Color.White.copy(alpha = 0.25f)),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Filled.Person,
                    contentDescription = "프로필",
                    tint = Color.White.copy(alpha = 0.7f),
                    modifier = Modifier.size(32.dp)
                )
            }
        }
    }
}

// ─────────────────────────────────────────────────────────────────
// SectionTitle  — 섹션 구분 타이틀
// ─────────────────────────────────────────────────────────────────
@Composable
fun SectionTitle(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        fontSize = 16.sp,
        fontWeight = FontWeight.SemiBold,
        color = CosmosTextPrimary,
        modifier = modifier.padding(horizontal = 20.dp, vertical = 14.dp)
    )
}

// ─────────────────────────────────────────────────────────────────
// CourseCard  — 홈 강좌 카드 (주황 accent bar + 강좌명 + 분반)
// ─────────────────────────────────────────────────────────────────
@Composable
fun CourseCard(
    course: Course,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 5.dp),
        shape = RoundedCornerShape(10.dp),
        colors = CardDefaults.cardColors(containerColor = Color.White),
        elevation = CardDefaults.cardElevation(defaultElevation = 1.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier
                    .width(4.dp)
                    .height(72.dp)
                    .background(
                        color = CosmosOrangeAccent,
                        shape = RoundedCornerShape(topStart = 10.dp, bottomStart = 10.dp)
                    )
            )
            Column(
                modifier = Modifier
                    .weight(1f)
                    .padding(horizontal = 16.dp, vertical = 14.dp)
            ) {
                Text(
                    text = "${course.titleKo}[${course.sectionNumber}]",
                    fontSize = 15.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = CosmosTextPrimary,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = course.titleEn,
                    fontSize = 11.sp,
                    color = CosmosTextSecondary,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )
            }
            Box(
                modifier = Modifier
                    .padding(end = 16.dp)
                    .border(1.dp, CosmosDivider, RoundedCornerShape(50))
                    .padding(horizontal = 10.dp, vertical = 4.dp)
            ) {
                Text(
                    text = course.sectionNumber,
                    fontSize = 11.sp,
                    color = CosmosTextSecondary,
                    fontWeight = FontWeight.Medium
                )
            }
        }
    }
}

// ─────────────────────────────────────────────────────────────────
// ChatRow  — 대화 탭 목록 행
// ─────────────────────────────────────────────────────────────────
@Composable
fun ChatRow(
    message: ChatMessage,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 12.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            modifier = Modifier
                .size(44.dp)
                .clip(CircleShape)
                .background(Color(0xFFE5E7EB)),
            contentAlignment = Alignment.Center
        ) {
            Icon(
                imageVector = Icons.Filled.Person,
                contentDescription = null,
                tint = Color(0xFF9CA3AF),
                modifier = Modifier.size(24.dp)
            )
        }
        Spacer(modifier = Modifier.width(12.dp))
        Column(modifier = Modifier.weight(1f)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = message.sender,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = CosmosTextPrimary
                )
                Text(
                    text = message.timestamp,
                    fontSize = 11.sp,
                    color = CosmosTextMuted
                )
            }
            Spacer(modifier = Modifier.height(3.dp))
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = message.preview,
                    fontSize = 12.sp,
                    color = CosmosTextSecondary,
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis,
                    modifier = Modifier.weight(1f)
                )
                if (message.isUnread) {
                    Spacer(modifier = Modifier.width(8.dp))
                    Box(
                        modifier = Modifier
                            .size(20.dp)
                            .clip(CircleShape)
                            .background(CosmosBadgeRed),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = "N",
                            fontSize = 10.sp,
                            color = Color.White,
                            fontWeight = FontWeight.Bold
                        )
                    }
                }
            }
        }
    }
    HorizontalDivider(
        modifier = Modifier.padding(horizontal = 16.dp),
        color = CosmosDivider,
        thickness = 0.5.dp
    )
}

// ─────────────────────────────────────────────────────────────────
// NotificationRow  — 알림 탭 목록 행
// ─────────────────────────────────────────────────────────────────
@Composable
fun NotificationRow(
    notification: Notification,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 14.dp),
        verticalAlignment = Alignment.Top
    ) {
        Box(
            modifier = Modifier
                .size(40.dp)
                .clip(CircleShape)
                .background(Color(0xFFF3F4F6)),
            contentAlignment = Alignment.Center
        ) {
            Icon(
                imageVector = when (notification.iconType) {
                    NotifIconType.CONTENT_MAKER -> Icons.Outlined.PlayCircle
                    NotifIconType.FILE          -> Icons.Outlined.AttachFile
                    NotifIconType.ANNOUNCEMENT  -> Icons.Outlined.Article
                    NotifIconType.QUIZ          -> Icons.Outlined.CheckCircle
                },
                contentDescription = null,
                tint = CosmosTextSecondary,
                modifier = Modifier.size(20.dp)
            )
        }
        Spacer(modifier = Modifier.width(12.dp))
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = "${notification.courseTitle}: ${notification.courseWeek}",
                fontSize = 12.sp,
                color = CosmosBlue,
                fontWeight = FontWeight.Medium
            )
            Spacer(modifier = Modifier.height(3.dp))
            Text(
                text = notification.content,
                fontSize = 14.sp,
                color = CosmosTextPrimary,
                fontWeight = FontWeight.Medium
            )
            Spacer(modifier = Modifier.height(3.dp))
            Text(
                text = "${notification.timeAgo} (${notification.timestamp})",
                fontSize = 11.sp,
                color = CosmosTextMuted
            )
        }
    }
    HorizontalDivider(
        modifier = Modifier.padding(horizontal = 16.dp),
        color = CosmosDivider,
        thickness = 0.5.dp
    )
}

// ─────────────────────────────────────────────────────────────────
// ScheduleItemRow  — 일정 탭 목록 행
// ─────────────────────────────────────────────────────────────────
@Composable
fun ScheduleItemRow(
    item: ScheduleItem,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 20.dp, vertical = 16.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = item.title,
                fontSize = 14.sp,
                color = CosmosTextPrimary,
                fontWeight = FontWeight.Medium
            )
            Spacer(modifier = Modifier.height(3.dp))
            Text(
                text = item.dateRange,
                fontSize = 12.sp,
                color = Color(0xFFEF4444)
            )
        }
        Icon(
            imageVector = Icons.Outlined.NotificationsNone,
            contentDescription = "알림",
            tint = CosmosTextMuted,
            modifier = Modifier
                .size(36.dp)
                .clip(CircleShape)
                .background(Color(0xFFF3F4F6))
                .padding(8.dp)
        )
    }
    HorizontalDivider(
        modifier = Modifier.padding(horizontal = 16.dp),
        color = CosmosDivider,
        thickness = 0.5.dp
    )
}

// ─────────────────────────────────────────────────────────────────
// MoreMenuItem  — 더보기 탭 메뉴 항목
// ─────────────────────────────────────────────────────────────────
@Composable
fun MoreMenuItem(
    title: String,
    trailingText: String? = null,
    icon: @Composable () -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 20.dp, vertical = 18.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            modifier = Modifier
                .size(36.dp)
                .clip(CircleShape)
                .background(Color(0xFFF3F4F6)),
            contentAlignment = Alignment.Center
        ) {
            icon()
        }
        Spacer(modifier = Modifier.width(14.dp))
        Text(
            text = title,
            fontSize = 15.sp,
            color = CosmosTextPrimary,
            modifier = Modifier.weight(1f)
        )
        if (trailingText != null) {
            Text(
                text = trailingText,
                fontSize = 14.sp,
                color = Color(0xFFEF4444),
                fontWeight = FontWeight.Medium
            )
        } else {
            Icon(
                imageVector = Icons.Filled.ChevronRight,
                contentDescription = null,
                tint = CosmosTextMuted,
                modifier = Modifier.size(20.dp)
            )
        }
    }
    HorizontalDivider(
        color = CosmosDivider,
        thickness = 0.5.dp
    )
}