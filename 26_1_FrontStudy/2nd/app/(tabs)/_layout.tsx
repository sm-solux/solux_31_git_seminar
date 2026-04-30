import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // 색상
        tabBarActiveTintColor: '#94B582',
        tabBarInactiveTintColor: 'gray',

        // ⭐ 핵심 설정
        tabBarPosition: 'bottom', // 웹에서도 하단 탭으로 강제
        tabBarShowLabel: true,

        // ⭐ 아이콘 위 / 텍스트 아래
        tabBarItemStyle: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 3,
        },

        // 전체 바 스타일
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="skills"
        options={{
          title: '기술',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="code-slash" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="activities"
        options={{
          title: '활동',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="contact"
        options={{
          title: '연락',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}