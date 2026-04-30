import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Skills() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <Text style={styles.title}>배우고 있는 기술</Text>

        <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
          <Text style={styles.cardTitle}>Frontend</Text>
          <Text style={styles.cardContent}>React, React Native, HTML, CSS</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
          <Text style={styles.cardTitle}>Backend</Text>
          <Text style={styles.cardContent}>Node.js, Express</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
          <Text style={styles.cardTitle}>Language</Text>
          <Text style={styles.cardContent}>JavaScript, Python, Java</Text>
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
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#94B582',
  },

  card: {
    backgroundColor: '#94B582',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    width: 400,
  },

  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#ffffff',
  },

  cardContent: {
    fontSize: 16,
    color: '#e5ffe5',
  },
});