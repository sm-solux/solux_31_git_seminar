import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NewHot() {
  return (
    <View style={styles.container}>

      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.title}>NEW & HOT</Text>

        <View style={styles.icons}>
          <Ionicons name="tv-outline" size={22} color="#fff" />
          <Ionicons name="download-outline" size={22} color="#fff" />
          <Ionicons name="search-outline" size={22} color="#fff" />
        </View>
      </View>

      {/* 카테고리 pills */}
      <View style={styles.pills}>
        <View style={styles.pill}><Text style={styles.pillText}>공개 예정</Text></View>
        <View style={styles.pill}><Text style={styles.pillText}>모두의 인기 콘텐츠</Text></View>
        <View style={styles.pill}><Text style={styles.pillText}>TOP 10 시리즈</Text></View>
        <View style={styles.pill}><Text style={styles.pillText}>TOP 10 영화</Text></View>
      </View>

      {/* 콘텐츠 카드 2개 */}
      <View style={styles.card}>
        <Ionicons name="film-outline" size={40} color="#000000" />
      </View>

      <View style={styles.card}>
        <Ionicons name="film-outline" size={40} color="#000000" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  icons: {
    flexDirection: 'row',
    gap: 15,
  },

  pills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginTop: 15,
  },

  pill: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },

  pillText: {
    color: '#fff',
    fontSize: 12,
  },

  card: {
    height: 500,

    backgroundColor: '#8ab0f8',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});