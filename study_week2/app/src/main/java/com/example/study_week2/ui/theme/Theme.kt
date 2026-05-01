package com.example.study_week2.ui.theme

import android.app.Activity
import android.os.Build
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.dynamicDarkColorScheme
import androidx.compose.material3.dynamicLightColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.graphics.Color

private val DarkColorScheme = darkColorScheme(
    primary = Purple80,
    secondary = PurpleGrey80,
    tertiary = Pink80
)

private val LightColorScheme = lightColorScheme(
    primary = Purple40,
    secondary = PurpleGrey40,
    tertiary = Pink40

    /* Other default colors to override
    background = Color(0xFFFFFBFE),
    surface = Color(0xFFFFFBFE),
    onPrimary = Color.White,
    onSecondary = Color.White,
    onTertiary = Color.White,
    onBackground = Color(0xFF1C1B1F),
    onSurface = Color(0xFF1C1B1F),
    */
)

@Composable
fun Study_week2Theme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    // Dynamic color is available on Android 12+
    dynamicColor: Boolean = true,
    content: @Composable () -> Unit
) {
    val colorScheme = when {
        dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
            val context = LocalContext.current
            if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
        }

        darkTheme -> DarkColorScheme
        else -> LightColorScheme
    }

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}

// ────────────────────────────────────────────
// Colors
// ────────────────────────────────────────────
val PrimaryPurple  = Color(0xFF6C63FF)
val LightPurple    = Color(0xFFEEEDFF)
val TealColor      = Color(0xFF00C9A7)
val OrangeColor    = Color(0xFFFFB74D)
val DarkBg         = Color(0xFF1E1E2E)
val SurfaceWhite   = Color(0xFFFFFFFF)
val BgGray         = Color(0xFFF2F3F7)
val TextPrimary    = Color(0xFF1A1A2E)
val TextSecondary  = Color(0xFF6B7280)
val CardBg         = Color(0xFFFFFFFF)

// ────────────────────────────────────────────
// Theme
// ────────────────────────────────────────────
@Composable
fun MyIntroTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = lightColorScheme(
            primary    = PrimaryPurple,
            background = BgGray,
            surface    = SurfaceWhite,
        ),
        content = content
    )
}