import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Activities() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <Text style={styles.title}>최근 활동</Text>

        <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
          <View style={styles.row}>
            <Ionicons name="laptop" size={24} color="#fff" />
            <Text style={styles.cardTitle}>Project</Text>
          </View>
          <Text style={styles.cardContent}>
            웹 개발 (React), 앱 개발 중 (React Native)
          </Text>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
          <View style={styles.row}>
            <Ionicons name="book" size={24} color="#fff" />
            <Text style={styles.cardTitle}>Study</Text>
          </View>
          <Text style={styles.cardContent}>
            데이터 구조, 컴퓨터아키텍쳐, 오픈소스프로그래밍, 앱 개발 공부
          </Text>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
          <View style={styles.row}>
            <Ionicons name="people" size={24} color="#fff" />
            <Text style={styles.cardTitle}>Experience</Text>
          </View>
          <Text style={styles.cardContent}>
            팀 프로젝트 및 협업 경험
          </Text>
        </Pressable>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  scroll: {
    width: 400,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#94B582',
  },

  card: {
    backgroundColor: '#94B582',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },

  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#ffffff',
  },

  cardContent: {
    fontSize: 16,
    color: '#e5ffe5',
  },
});