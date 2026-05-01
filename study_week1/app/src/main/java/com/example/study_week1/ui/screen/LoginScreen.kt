package com.example.study_week1.ui.screen

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.study_week1.ui.component.*

val PrimaryColor = Color(0xFF4A6CF7)

@Composable
fun LoginScreen(onNavigateToSignup: () -> Unit) {
    // 상태
    var userId by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var passwordVisible by remember { mutableStateOf(false) }
    var keepLoggedIn by remember { mutableStateOf(false) }

    // 유효성 오류
    var userIdError by remember { mutableStateOf("") }
    var passwordError by remember { mutableStateOf("") }

    fun validate(): Boolean {
        var valid = true
        userIdError = if (userId.isBlank()) "아이디를 입력해주세요" else ""
        passwordError = if (password.length < 8) "비밀번호는 8자 이상이어야 합니다" else ""
        if (userIdError.isNotEmpty() || passwordError.isNotEmpty()) valid = false
        return valid
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F6FA))
            .verticalScroll(rememberScrollState())
            .padding(horizontal = 24.dp, vertical = 48.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // 로고
        Box(
            modifier = Modifier
                .size(56.dp)
                .clip(CircleShape)
                .background(Color(0xFFE8ECFF)),
            contentAlignment = Alignment.Center
        ) {
            Text("<>", fontSize = 18.sp, color = PrimaryColor, fontWeight = FontWeight.Bold)
        }

        Spacer(modifier = Modifier.height(16.dp))

        Text("로그인", fontSize = 26.sp, fontWeight = FontWeight.Bold, color = Color(0xFF1A1A2E))
        Text(
            "프로그래밍 동아리 SOLUX에 다시 오신 것을 환영해요",
            fontSize = 13.sp,
            color = Color.Gray,
            textAlign = TextAlign.Center,
            modifier = Modifier.padding(top = 6.dp, bottom = 28.dp)
        )

        // 아이디
        InputLabel("아이디")
        OutlinedTextField(
            value = userId,
            onValueChange = { userId = it },
            placeholder = { Text("아이디를 입력하세요", fontSize = 14.sp) },
            leadingIcon = { Icon(Icons.Default.Person, contentDescription = null, tint = Color.Gray) },
            isError = userIdError.isNotEmpty(),
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(10.dp)
        )
        if (userIdError.isNotEmpty()) ErrorText(userIdError)

        Spacer(modifier = Modifier.height(12.dp))

        // 비밀번호
        InputLabel("비밀번호")
        OutlinedTextField(
            value = password,
            onValueChange = { password = it },
            placeholder = { Text("비밀번호를 입력하세요", fontSize = 14.sp) },
            leadingIcon = { Icon(Icons.Default.Lock, contentDescription = null, tint = Color.Gray) },
            trailingIcon = {
                IconButton(onClick = { passwordVisible = !passwordVisible }) {
                    Icon(
                        if (passwordVisible) Icons.Default.Visibility else Icons.Default.VisibilityOff,
                        contentDescription = null, tint = Color.Gray
                    )
                }
            },
            visualTransformation = if (passwordVisible) VisualTransformation.None else PasswordVisualTransformation(),
            isError = passwordError.isNotEmpty(),
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(10.dp)
        )
        if (passwordError.isNotEmpty()) ErrorText(passwordError)

        Spacer(modifier = Modifier.height(8.dp))

        // 로그인 상태 유지 + 비밀번호 찾기
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Checkbox(
                    checked = keepLoggedIn,
                    onCheckedChange = { keepLoggedIn = it },
                    colors = CheckboxDefaults.colors(checkedColor = PrimaryColor)
                )
                Text("로그인 상태 유지", fontSize = 13.sp, color = Color.DarkGray)
            }
            Text(
                "비밀번호 찾기",
                fontSize = 13.sp,
                color = PrimaryColor,
                modifier = Modifier.clickable { }
            )
        }

        Spacer(modifier = Modifier.height(16.dp))

        // 로그인 버튼
        Button(
            onClick = { validate() },
            modifier = Modifier.fillMaxWidth().height(50.dp),
            shape = RoundedCornerShape(10.dp),
            colors = ButtonDefaults.buttonColors(containerColor = PrimaryColor)
        ) {
            Text("로그인", fontSize = 16.sp, fontWeight = FontWeight.SemiBold)
        }

        Spacer(modifier = Modifier.height(16.dp))

        // 구분선
        Row(verticalAlignment = Alignment.CenterVertically) {
            Divider(modifier = Modifier.weight(1f), color = Color.LightGray)
            Text("  또는  ", fontSize = 12.sp, color = Color.Gray)
            Divider(modifier = Modifier.weight(1f), color = Color.LightGray)
        }

        Spacer(modifier = Modifier.height(16.dp))

        // 소셜 로그인
        SocialButton(text = "이메일로 계속하기", iconText = "✉")
        Spacer(modifier = Modifier.height(10.dp))
        SocialButton(text = "소셜 로그인", iconText = "◈")

        Spacer(modifier = Modifier.height(24.dp))

        // 회원가입 이동
        Row {
            Text("아직 회원이 아닌가요? ", fontSize = 13.sp, color = Color.Gray)
            Text(
                "회원가입",
                fontSize = 13.sp,
                color = PrimaryColor,
                fontWeight = FontWeight.SemiBold,
                modifier = Modifier.clickable { onNavigateToSignup() }
            )
        }
    }
}
