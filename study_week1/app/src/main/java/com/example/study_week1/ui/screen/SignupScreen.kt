package com.example.study_week1.ui.screen

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.study_week1.ui.component.*

import androidx.compose.material3.ExperimentalMaterial3Api

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SignupScreen(onNavigateToLogin: () -> Unit) {
    // 상태
    var userId by remember { mutableStateOf("") }
    var name by remember { mutableStateOf("") }
    var englishName by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var passwordConfirm by remember { mutableStateOf("") }
    var birthDate by remember { mutableStateOf("") }
    var gender by remember { mutableStateOf("") }
    var phone by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var country by remember { mutableStateOf("한국") }
    var address by remember { mutableStateOf("") }
    var addressDetail by remember { mutableStateOf("") }
    var newsletterEnabled by remember { mutableStateOf(true) }
    var newsEmail by remember { mutableStateOf(false) }
    var newsSms by remember { mutableStateOf(false) }
    var newsApp by remember { mutableStateOf(false) }
    var passwordVisible by remember { mutableStateOf(false) }
    var passwordConfirmVisible by remember { mutableStateOf(false) }
    var countryExpanded by remember { mutableStateOf(false) }

    // 유효성 오류
    var userIdError by remember { mutableStateOf("") }
    var passwordError by remember { mutableStateOf("") }
    var passwordConfirmError by remember { mutableStateOf("") }
    var emailError by remember { mutableStateOf("") }

    val countries = listOf("한국", "미국", "일본", "중국", "영국", "기타")

    fun validateSignup(): Boolean {
        var valid = true
        userIdError = if (userId.length > 16) "아이디는 16자 이하여야 합니다" else ""
        passwordError = if (password.length < 8) "비밀번호는 8자 이상이어야 합니다" else ""
        passwordConfirmError = if (password != passwordConfirm) "비밀번호가 일치하지 않습니다" else ""
        emailError = if (email.isNotBlank() && !android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches())
            "올바른 이메일 형식이 아닙니다" else ""
        if (userIdError.isNotEmpty() || passwordError.isNotEmpty() ||
            passwordConfirmError.isNotEmpty() || emailError.isNotEmpty()) valid = false
        return valid
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F6FA))
            .verticalScroll(rememberScrollState())
            .padding(horizontal = 24.dp, vertical = 32.dp)
    ) {
        // 상단 뒤로가기
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.clickable { onNavigateToLogin() }
        ) {
            Icon(Icons.Default.ArrowBack, contentDescription = null, tint = Color.DarkGray)
            Spacer(modifier = Modifier.width(4.dp))
            Text("회원가입", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Color(0xFF1A1A2E))
        }
        Text(
            "기본 정보부터 입력을 완료하면 동아리에 가입되어요",
            fontSize = 13.sp,
            color = Color.Gray,
            modifier = Modifier.padding(top = 4.dp, bottom = 24.dp)
        )

        // 아이디
        InputLabel("아이디")
        Row(verticalAlignment = Alignment.CenterVertically) {
            OutlinedTextField(
                value = userId,
                onValueChange = { userId = it },
                placeholder = { Text("최대 16자 영문/숫자", fontSize = 14.sp) },
                leadingIcon = { Icon(Icons.Default.Person, contentDescription = null, tint = Color.Gray) },
                isError = userIdError.isNotEmpty(),
                singleLine = true,
                modifier = Modifier.weight(1f),
                shape = RoundedCornerShape(10.dp)
            )
            Spacer(modifier = Modifier.width(8.dp))
            Button(
                onClick = { },
                shape = RoundedCornerShape(10.dp),
                colors = ButtonDefaults.buttonColors(containerColor = PrimaryColor)
            ) { Text("중복확인", fontSize = 13.sp) }
        }
        if (userIdError.isNotEmpty()) ErrorText(userIdError)

        Spacer(modifier = Modifier.height(12.dp))

        // 이름
        InputLabel("이름")
        OutlinedTextField(
            value = name,
            onValueChange = { name = it },
            placeholder = { Text("이름을 입력하세요", fontSize = 14.sp) },
            leadingIcon = { Icon(Icons.Default.Badge, contentDescription = null, tint = Color.Gray) },
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(10.dp)
        )

        Spacer(modifier = Modifier.height(12.dp))

        // 영문 이름
        InputLabel("영문 이름")
        OutlinedTextField(
            value = englishName,
            onValueChange = { englishName = it },
            placeholder = { Text("English name", fontSize = 14.sp) },
            leadingIcon = { Icon(Icons.Default.Badge, contentDescription = null, tint = Color.Gray) },
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(10.dp)
        )

        Spacer(modifier = Modifier.height(12.dp))

        // 비밀번호
        InputLabel("비밀번호")
        OutlinedTextField(
            value = password,
            onValueChange = { password = it },
            placeholder = { Text("영문/숫자/특수문자 포함 8자 이상", fontSize = 14.sp) },
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

        Spacer(modifier = Modifier.height(12.dp))

        // 비밀번호 확인
        InputLabel("비밀번호 확인")
        OutlinedTextField(
            value = passwordConfirm,
            onValueChange = { passwordConfirm = it },
            placeholder = { Text("비밀번호를 다시 입력하세요", fontSize = 14.sp) },
            leadingIcon = { Icon(Icons.Default.Lock, contentDescription = null, tint = Color.Gray) },
            trailingIcon = {
                IconButton(onClick = { passwordConfirmVisible = !passwordConfirmVisible }) {
                    Icon(
                        if (passwordConfirmVisible) Icons.Default.Visibility else Icons.Default.VisibilityOff,
                        contentDescription = null, tint = Color.Gray
                    )
                }
            },
            visualTransformation = if (passwordConfirmVisible) VisualTransformation.None else PasswordVisualTransformation(),
            isError = passwordConfirmError.isNotEmpty(),
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(10.dp)
        )
        if (passwordConfirmError.isNotEmpty()) ErrorText(passwordConfirmError)

        Spacer(modifier = Modifier.height(12.dp))

        // 생년월일
        InputLabel("생년월일")
        OutlinedTextField(
            value = birthDate,
            onValueChange = { birthDate = it },
            placeholder = { Text("YYYY-MM-DD", fontSize = 14.sp) },
            leadingIcon = { Icon(Icons.Default.CalendarToday, contentDescription = null, tint = Color.Gray) },
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(10.dp)
        )

        Spacer(modifier = Modifier.height(12.dp))

        // 성별 라디오
        InputLabel("성별")
        Row(verticalAlignment = Alignment.CenterVertically) {
            RadioButton(
                selected = gender == "남성",
                onClick = { gender = "남성" },
                colors = RadioButtonDefaults.colors(selectedColor = PrimaryColor)
            )
            Text("남성", fontSize = 14.sp, modifier = Modifier.padding(end = 16.dp))
            RadioButton(
                selected = gender == "여성",
                onClick = { gender = "여성" },
                colors = RadioButtonDefaults.colors(selectedColor = PrimaryColor)
            )
            Text("여성", fontSize = 14.sp)
        }

        Spacer(modifier = Modifier.height(12.dp))

        // 휴대폰
        InputLabel("휴대폰 번호")
        OutlinedTextField(
            value = phone,
            onValueChange = { phone = it },
            placeholder = { Text("010-0000-0000", fontSize = 14.sp) },
            leadingIcon = { Icon(Icons.Default.Phone, contentDescription = null, tint = Color.Gray) },
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(10.dp)
        )

        Spacer(modifier = Modifier.height(12.dp))

        // 이메일
        InputLabel("이메일")
        OutlinedTextField(
            value = email,
            onValueChange = { email = it },
            placeholder = { Text("example@email.com", fontSize = 14.sp) },
            leadingIcon = { Icon(Icons.Default.Email, contentDescription = null, tint = Color.Gray) },
            isError = emailError.isNotEmpty(),
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(10.dp)
        )
        if (emailError.isNotEmpty()) ErrorText(emailError)

        Spacer(modifier = Modifier.height(12.dp))

        // 국가 드롭다운
        InputLabel("국가")
        ExposedDropdownMenuBox(
            expanded = countryExpanded,
            onExpandedChange = { countryExpanded = !countryExpanded }
        ) {
            OutlinedTextField(
                value = country,
                onValueChange = {},
                readOnly = true,
                trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = countryExpanded) },
                modifier = Modifier.menuAnchor().fillMaxWidth(),
                shape = RoundedCornerShape(10.dp)
            )
            ExposedDropdownMenu(expanded = countryExpanded, onDismissRequest = { countryExpanded = false }) {
                countries.forEach { c ->
                    DropdownMenuItem(text = { Text(c) }, onClick = { country = c; countryExpanded = false })
                }
            }
        }

        Spacer(modifier = Modifier.height(12.dp))

        // 주소
        InputLabel("주소")
        Row(verticalAlignment = Alignment.CenterVertically) {
            OutlinedTextField(
                value = address,
                onValueChange = { address = it },
                placeholder = { Text("기본 주소", fontSize = 14.sp) },
                leadingIcon = { Icon(Icons.Default.Home, contentDescription = null, tint = Color.Gray) },
                singleLine = true,
                modifier = Modifier.weight(1f),
                shape = RoundedCornerShape(10.dp)
            )
            Spacer(modifier = Modifier.width(8.dp))
            Button(
                onClick = { },
                shape = RoundedCornerShape(10.dp),
                colors = ButtonDefaults.buttonColors(containerColor = PrimaryColor)
            ) { Text("주소검색", fontSize = 13.sp) }
        }
        Spacer(modifier = Modifier.height(8.dp))
        OutlinedTextField(
            value = addressDetail,
            onValueChange = { addressDetail = it },
            placeholder = { Text("상세 주소", fontSize = 14.sp) },
            leadingIcon = { Icon(Icons.Default.Home, contentDescription = null, tint = Color.Gray) },
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(10.dp)
        )

        Spacer(modifier = Modifier.height(20.dp))

        // 뉴스레터
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Column {
                Text("뉴스레터 설정", fontSize = 15.sp, fontWeight = FontWeight.SemiBold)
                Text("뉴스레터 수신 동의", fontSize = 13.sp, color = Color.Gray)
            }
            Switch(
                checked = newsletterEnabled,
                onCheckedChange = { newsletterEnabled = it },
                colors = SwitchDefaults.colors(checkedThumbColor = Color.White, checkedTrackColor = PrimaryColor)
            )
        }

        Spacer(modifier = Modifier.height(8.dp))

        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            NewsletterChip("전자메일", newsEmail) { newsEmail = !newsEmail }
            NewsletterChip("SMS", newsSms) { newsSms = !newsSms }
            NewsletterChip("앱알림", newsApp) { newsApp = !newsApp }
        }

        Spacer(modifier = Modifier.height(28.dp))

        // 회원가입 완료
        Button(
            onClick = { validateSignup() },
            modifier = Modifier.fillMaxWidth().height(52.dp),
            shape = RoundedCornerShape(10.dp),
            colors = ButtonDefaults.buttonColors(containerColor = PrimaryColor)
        ) {
            Text("회원가입 완료", fontSize = 16.sp, fontWeight = FontWeight.SemiBold)
        }

        Spacer(modifier = Modifier.height(16.dp))

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.Center
        ) {
            Text("이미 계정이 있으신가요? ", fontSize = 13.sp, color = Color.Gray)
            Text(
                "로그인",
                fontSize = 13.sp,
                color = PrimaryColor,
                fontWeight = FontWeight.SemiBold,
                modifier = Modifier.clickable { onNavigateToLogin() }
            )
        }

        Spacer(modifier = Modifier.height(24.dp))
    }
}
