import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Contact() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <Text style={styles.title}>연락처 & 링크</Text>

        <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
          <View style={styles.row}>
            <Ionicons name="mail" size={24} color="#fff" />
            <Text style={styles.cardTitle}>Email</Text>
          </View>
          <Text style={styles.cardContent}>nagyeong25@sookmyung.ac.kr</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
          <View style={styles.row}>
            <Ionicons name="logo-github" size={24} color="#fff" />
            <Text style={styles.cardTitle}>GitHub</Text>
          </View>
          <Text style={styles.cardContent}>github.com/LINAGG1</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
          <View style={styles.row}>
            <Ionicons name="call" size={24} color="#fff" />
            <Text style={styles.cardTitle}>Phone</Text>
          </View>
          <Text style={styles.cardContent}>010-5613-3598</Text>
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
    marginBottom: 15,
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
