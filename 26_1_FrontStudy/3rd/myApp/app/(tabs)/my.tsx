import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const dummy = [1,2,3,4,5];
const colors = ['#e50914', '#1f1f1f', '#333', '#555', '#777'];

export default function My() {
  return (
    <ScrollView style={styles.container}>

      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.title}>나의 넷플릭스</Text>

        <View style={styles.icons}>
          <Ionicons name="tv-outline" size={22} color="#fff" />
          <Ionicons name="search-outline" size={22} color="#fff" />
          <Ionicons name="list-outline" size={22} color="#fff" />
        </View>
      </View>

      {/* 프로필 */}
      <View style={styles.profile}>
        <Ionicons name="person-circle-outline" size={80} color="#fff" />
        <Text style={styles.name}>나경 님</Text>
      </View>

      {/* 내가 찜한 리스트 */}
      <Text style={styles.sectionTitle}>내가 찜한 리스트</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dummy.map((item) => (
          <View
            key={item}
            style={[styles.card, { backgroundColor: colors[item % colors.length] }]}
          >
            <Ionicons name="image-outline" size={20} color="#fff" />
          </View>
        ))}
      </ScrollView>

      {/* 예고편 */}
      <Text style={styles.sectionTitle}>회원님이 시청하신 예고편 모음</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dummy.map((item) => (
          <View
            key={item}
            style={[styles.card, { backgroundColor: colors[(item+1) % colors.length] }]}
          >
            <Ionicons name="play-outline" size={20} color="#fff" />
          </View>
        ))}
      </ScrollView>

      {/* 시청 중 */}
      <Text style={styles.sectionTitle}>시청 중인 콘텐츠</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dummy.map((item) => (
          <View
            key={item}
            style={[styles.card, { backgroundColor: colors[(item+2) % colors.length] }]}
          >
            <Ionicons name="film-outline" size={20} color="#fff" />
          </View>
        ))}
      </ScrollView>

    </ScrollView>
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

  profile: {
    alignItems: 'center',
    marginTop: 30,
  },

  name: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 15,
  },

  card: {
    width: 90,
    height: 135, // 
    borderRadius: 8,
    marginHorizontal: 6,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});