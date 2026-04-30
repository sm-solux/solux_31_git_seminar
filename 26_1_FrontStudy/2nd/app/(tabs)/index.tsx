
// ================= HOME =================
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>

      <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
        <View style={styles.profileRow}>
          <Ionicons name="person-circle" size={60} color="#fff" />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.name}>이나경</Text>
            <Text style={styles.intro}>프론트엔드 학습자</Text>
          </View>
        </View>

        <Text style={styles.description}>
          눈에 잘 띄는 화면을 만들고 싶습니다. 같은 내용을 웹과 앱으로 각각 구현해보며 공부 중입니다.
        </Text>
      </Pressable>

      <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.aboutText}>
          저는 새로운 기술을 배우면 바로 작은 결과물로 옮겨보는 편입니다.
        </Text>
      </Pressable>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },

  card: {
    backgroundColor: '#94B582',
    padding: 25,
    borderRadius: 15,
    marginBottom: 30,
    width: 400,
  },

  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  intro: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  description: {
    fontSize: 14,
    marginTop: 10,
    color: '#ffffff',
  },

  aboutText: {
    fontSize: 16,
    color: '#e5ffe5',
    lineHeight: 22,
  },
});
