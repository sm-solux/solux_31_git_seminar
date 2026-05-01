package com.example.study_week1.ui.component

import androidx.compose.foundation.border
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
private val PrimaryColor = Color(0xFF4A6CF7)
@Composable
fun InputLabel(text: String) {
    Text(
        text,
        fontSize = 13.sp,
        fontWeight = FontWeight.Medium,
        color = Color(0xFF444444),
        modifier = Modifier.padding(bottom = 4.dp)
    )
}

@Composable
fun ErrorText(message: String) {
    Text(
        message,
        fontSize = 12.sp,
        color = Color.Red,
        modifier = Modifier.padding(top = 2.dp, start = 4.dp)
    )
}

@Composable
fun SocialButton(text: String, iconText: String) {
    OutlinedButton(
        onClick = { },
        modifier = Modifier.fillMaxWidth().height(48.dp),
        shape = RoundedCornerShape(10.dp),
        border = ButtonDefaults.outlinedButtonBorder
    ) {
        Text(iconText, fontSize = 16.sp, modifier = Modifier.padding(end = 8.dp))
        Text(text, fontSize = 14.sp, color = Color.DarkGray)
    }
}

@Composable
fun NewsletterChip(label: String, selected: Boolean, onClick: () -> Unit) {
    Box(
        modifier = Modifier
            .clip(RoundedCornerShape(20.dp))
            .background(if (selected) PrimaryColor.copy(alpha = 0.15f) else Color.Transparent)
            .border(1.dp, if (selected) PrimaryColor else Color.LightGray, RoundedCornerShape(20.dp))
            .clickable { onClick() }
            .padding(horizontal = 16.dp, vertical = 8.dp)
    ) {
        Text(label, fontSize = 13.sp, color = if (selected) PrimaryColor else Color.Gray)
    }
}