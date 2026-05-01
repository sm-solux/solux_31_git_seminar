import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import CommunityScreen from "./screens/CommunityScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Header from "./components/Header";
import { StyleSheet, View } from "react-native";
import { colors } from "./constants";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    PretendardRegular: require("./assets/fonts/pretendard-Regular.otf"),
    PretendardBold: require("./assets/fonts/pretendard-Bold.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            header: () => <Header title={route.name} />,
            tabBarIcon: ({ color, size }) => {
              const icons = {
                홈: "home",
                커뮤니티: "people",
                채팅: "chatbubble-ellipses",
                나의당근: "person",
              } as const;
              return (
                <Ionicons
                  name={icons[route.name as keyof typeof icons]}
                  size={size}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: colors.neutral_100, // 선택된 탭 색상
            tabBarInactiveTintColor: colors.neutral_70,
            tabBarStyle: {
              backgroundColor: colors.neutral_50,
              paddingTop: 8,
              height: 80,
              borderColor: colors.neutral_60,
            },
          })}
        >
          <Tab.Screen name="홈" component={HomeScreen} />
          <Tab.Screen name="커뮤니티" component={CommunityScreen} />
          <Tab.Screen name="채팅" component={ChatScreen} />
          <Tab.Screen name="나의당근" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
