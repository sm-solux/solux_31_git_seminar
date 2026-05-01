package com.example.study_week2.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.study_week2.ui.theme.LightPurple
import com.example.study_week2.ui.theme.PrimaryPurple
import com.example.study_week2.ui.theme.TextPrimary
import com.example.study_week2.ui.theme.TextSecondary

@Composable
fun SectionTitle(text: String) {
    Text(
        text = text,
        fontWeight = FontWeight.Bold,
        fontSize = 18.sp,
        color = TextPrimary
    )
}

@Composable
fun IconBox(icon: ImageVector, size: Int = 44, iconSize: Int = 22) {
    Box(
        modifier = Modifier
            .size(size.dp)
            .clip(RoundedCornerShape(12.dp))
            .background(LightPurple),
        contentAlignment = Alignment.Center
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = PrimaryPurple,
            modifier = Modifier.size(iconSize.dp)
        )
    }
}

@Composable
fun BulletText(text: String) {
    Row(
        verticalAlignment = Alignment.Top,
        horizontalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        Box(
            Modifier
                .size(7.dp)
                .offset(y = 6.dp)
                .clip(CircleShape)
                .background(PrimaryPurple)
        )
        Text(text, fontSize = 14.sp, color = TextSecondary, lineHeight = 20.sp)
    }
}