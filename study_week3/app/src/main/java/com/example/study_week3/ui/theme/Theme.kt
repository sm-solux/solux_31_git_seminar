package com.example.study_week3.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val LightColorScheme = lightColorScheme(
    primary      = CosmosBlue,
    secondary    = CosmosOrangeAccent,
    background   = CosmosBackground,
    surface      = CosmosCardBackground,
    onPrimary    = Color.White,
    onBackground = CosmosTextPrimary,
    onSurface    = CosmosTextPrimary,
)

@Composable
fun CosmosTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = LightColorScheme,
        typography  = CosmosTypography,
        content     = content
    )
}