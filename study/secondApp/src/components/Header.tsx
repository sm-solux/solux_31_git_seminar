import { View } from "react-native";
import Text from "./customText";
import React from "react";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, fontSize } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.intro}>INTRO</Text>
      <View style={styles.iconLayout}>
        <MaterialIcons name="notifications-none" size={24} color="#121212" />
        <MaterialIcons name="menu" size={24} color="#121212" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral_100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingTop: 8,
    paddingBottom: 12,
  },
  intro: {
    fontSize: fontSize.lg,
    fontFamily: "PretendardBold",
    color: colors.neutral_10,
  },
  iconLayout: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});

export default Header;
