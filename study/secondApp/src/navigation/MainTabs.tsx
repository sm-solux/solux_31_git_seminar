import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Skill from "../screens/Skill";
import Activity from "../screens/Activity";
import Contact from "../screens/Contact";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import { colors } from "../constants";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <Header />,
        // tabBar 커스텀
        tabBarActiveTintColor: colors.primary_50,
        tabBarInactiveTintColor: colors.neutral_60,
        tabBarStyle: {
          height: 72,
          borderTopWidth: 1,
          borderTopColor: colors.neutral_90,
          backgroundColor: colors.neutral_100,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === "홈") {
            return (
              // 홈 아이콘만 CommunityIcons에서 가져옴
              <MaterialCommunityIcons
                name="home-outline"
                size={size}
                color={color}
              />
            );
          }
          let iconName: React.ComponentProps<typeof MaterialIcons>["name"] =
            "home";

          if (route.name === "기술") {
            iconName = "auto-graph";
          } else if (route.name === "활동") {
            iconName = "work-outline";
          } else if (route.name === "연락") {
            iconName = "alternate-email";
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="기술" component={Skill} />
      <Tab.Screen name="활동" component={Activity} />
      <Tab.Screen name="연락" component={Contact} />
    </Tab.Navigator>
  );
};

export default MainTabs;
