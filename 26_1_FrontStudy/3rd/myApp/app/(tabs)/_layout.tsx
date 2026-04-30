import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#6a6a6a', // 👉 넷플릭스 느낌 회색
          borderTopWidth: 0, // 위 라인 제거 (더 깔끔)
        },

        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#afafaf',
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
        name="newhot"
        options={{
          title: 'New & Hot',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flame" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="my"
        options={{
          title: '나의 넷플릭스',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}