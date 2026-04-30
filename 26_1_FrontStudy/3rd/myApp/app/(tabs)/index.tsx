import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const dummy = [1, 2, 3, 4 ,5];

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.user}>나경 님</Text>

        <View style={styles.icons}>
          <Ionicons name="tv-outline" size={22} color="#fff"/>
          <Ionicons name="download-outline" size={22} color="#fff"/>
          <Ionicons name="search-outline" size={22} color="#fff"/>
        </View>
      </View>
      
      <View style={styles.pills}>
        <View style={styles.pill}><Text style={styles.pillText}>시리즈</Text></View>
        <View style={styles.pill}><Text style={styles.pillText}>영화</Text></View>
        <View style={styles.pill}><Text style={styles.pillText}>카테고리</Text></View>
      </View>

      <View style={styles.mainPoster}>
        <View style={styles.posterCard}>
          <Ionicons name="film-outline" size={40} color="#000"/>
        </View>
      </View>

      <Text style={styles.title}>다시보기 추천 콘텐츠</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dummy.map((item) => (
          <View key={item} style={styles.card}>
            <Ionicons name="image-outline" size={30} color="#000"/>
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

  user: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  icons: {
    flexDirection: 'row',
    gap:15,
  },

  pills: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 15,
  },

  pill: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginRight: 10,
  },

  pillText: {
    color: '#fff',
    fontSize: 13,
  },

  mainPoster: {
    alignItems: 'center',
    marginTop: 20,
  },

  posterCard: {
    width: 200,
    height: 300,
    backgroundColor: '#f2a082',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
  },

  card: {
    width: 120,
    height: 180,
    backgroundColor: '#fad072',
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
