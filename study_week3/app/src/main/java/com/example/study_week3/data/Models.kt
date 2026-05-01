package com.example.study_week3.data

// ── Data Classes ──────────────────────────────────────────────────

data class Course(
    val id: String,
    val titleKo: String,
    val titleEn: String,
    val sectionNumber: String
)

data class ChatMessage(
    val sender: String,
    val senderId: String,
    val preview: String,
    val timestamp: String,
    val isUnread: Boolean = false
)

data class Notification(
    val courseTitle: String,
    val courseWeek: String,
    val content: String,
    val timeAgo: String,
    val timestamp: String,
    val iconType: NotifIconType
)

enum class NotifIconType {
    CONTENT_MAKER, FILE, ANNOUNCEMENT, QUIZ
}

data class ScheduleItem(
    val title: String,
    val dateRange: String,
    val isSingleDate: Boolean = false
)

// ── Sample Data ───────────────────────────────────────────────────

object SampleData {

    val currentCourses = listOf(
        Course("1", "AI코딩을통한금융세상읽기",  "UNDERSTANDING THE FINANCIAL WORLD WITH AI CODING", "001"),
        Course("2", "경영정보시스템",              "MANAGEMENT INFORMATION SYSTEM",                   "004"),
        Course("3", "바이오인포메틱스개론",         "INTRODUCTION TO BIOINFORMATICS",                  "001"),
        Course("4", "생성형AI의이해",              "INTRODUCTION TO GENERATIVE AI",                   "001"),
        Course("5", "시스템프로그래밍",             "SYSTEM PROGRAMMING",                              "001"),
        Course("6", "자연어처리와언어모델",          "NLP WITH LANGUAGE MODELS",                        "001")
    )

    val chatMessages = listOf(
        ChatMessage(
            sender    = "아무개 (2315***)",
            senderId  = "2315",
            preview   = "다음주에 발표가 있습니다....",
            timestamp = "2026.03.24 20:54",
            isUnread  = false
        ),
        ChatMessage(
            sender    = "인권·성평등센터 (p086***)",
            senderId  = "p086",
            preview   = "[법정의무교육] 2025학년도 2학기 온라인 폭력예방교육 간식 행사 및 이수 협조 안내...",
            timestamp = "2025.12.08 13:57",
            isUnread  = true
        ),
        ChatMessage(
            sender    = "인권·성평등센터 (p086***)",
            senderId  = "p086",
            preview   = "[법정의무교육] 2025학년도 2학기 온라인 폭력예방교육 참여 협조 안내...",
            timestamp = "2025.11.17 10:06",
            isUnread  = true
        )
    )

    val notifications = listOf(
        Notification("생성형AI의이해 (001)",      "6주차 [4월07일 - 4월13일]", "새 콘텐츠메이커이(가) 등록되었습니다.",    "1일전", "04/09 오전 11:49", NotifIconType.CONTENT_MAKER),
        Notification("자연어처리와언어모델 (001)", "6주차 [4월07일 - 4월13일]", "새 파일이(가) 등록되었습니다.",           "1일전", "04/09 오전 11:19", NotifIconType.FILE),
        Notification("생성형AI의이해 (001)",      "6주차 [4월07일 - 4월13일]", "새 파일이(가) 등록되었습니다.",           "1일전", "04/08 오후 22:18", NotifIconType.FILE),
        Notification("바이오인포메틱스개론 (001)", "강의 개요",                 "새 공지사항이 등록되었습니다.",           "1일전", "04/08 오후 20:40", NotifIconType.ANNOUNCEMENT),
        Notification("경영정보시스템 (004)",       "강의 개요",                 "새 공지사항이 등록되었습니다.",           "1일전", "04/08 오후 20:12", NotifIconType.ANNOUNCEMENT),
        Notification("경영정보시스템 (004)",       "6주차 [4월07일 - 4월13일]", "새 퀴즈이(가) 등록되었습니다.",          "1일전", "04/08 오후 19:50", NotifIconType.QUIZ),
        Notification("경영정보시스템 (004)",       "6주차 [4월07일 - 4월13일]", "새 파일이(가) 등록되었습니다.",          "1일전", "04/08 오후 19:48", NotifIconType.FILE),
        Notification("경영정보시스템 (004)",       "6주차 [4월07일 - 4월13일]", "새 콘텐츠메이커이(가) 등록되었습니다.", "1일전",  "04/08 오후 19:32", NotifIconType.CONTENT_MAKER)
    )

    val scheduleItems = listOf(
        ScheduleItem("6주차 퀴즈 마감 예정",            "2026.04.13 23:59",                       isSingleDate = true),
        ScheduleItem("아무개 교수님 5-1",       "2026.04.07 00:00 ~ 2026.04.13 23:59"),
        ScheduleItem("아무개 교수님 5-2",         "2026.04.07 00:00 ~ 2026.04.13 23:59"),
        ScheduleItem("AI금융_06(데이터 시각화)",        "2026.04.07 00:00 ~ 2026.04.13 23:59"),
        ScheduleItem("Lecture 5",                      "2026.04.07 00:00 ~ 2026.04.13 23:59"),
        ScheduleItem("경영정보시스템_6주차_데이터베이스", "2026.04.07 00:00 ~ 2026.04.13 23:59"),
        ScheduleItem("Lecture 6",                      "2026.04.07 00:00 ~ 2026.04.13 23:59")
    )
}