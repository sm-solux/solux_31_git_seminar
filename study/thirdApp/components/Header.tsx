import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, fontSize } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type TitleProps = {
  title: string;
};

const Header = ({ title }: TitleProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        {title == "홈" && (
          <Ionicons name="compass" size={24} color={colors.neutral_100} />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.iconContainer}>
        {(title == "홈" || title == "커뮤니티") && (
          <Ionicons name="search" size={24} color={colors.neutral_100} />
        )}
        {(title == "홈" || title == "커뮤니티" || title == "채팅") && (
          <Ionicons name="notifications" size={24} color={colors.neutral_100} />
        )}
        {(title == "홈" || title == "커뮤니티") && (
          <Ionicons name="menu" size={24} color={colors.neutral_100} />
        )}
        {(title == "채팅" || title == "나의당근") && (
          <Ionicons name="settings" size={24} color={colors.neutral_100} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.neutral_10,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    color: colors.neutral_100,
    fontFamily: "PretendardBold",
    fontSize: fontSize.lg,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default Header;
