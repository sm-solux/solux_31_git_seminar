import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { colors, fontSize, radius } from "../constants";
import ProfileCard from "../components/ProfileCard";
import ProfileList from "../components/ProfileList";

const ProfileScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.profileContainer}>
        <Image
          style={styles.imageContainer}
          source={require("../assets/icon.png")}
        />
        <Text style={styles.name}>예은</Text>
        <Text style={styles.degree}>36.5℃</Text>
      </View>

      <View>
        <ProfileList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral_10,
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: colors.neutral_10,
    borderRadius: radius.xl,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors.neutral_50,
    borderWidth: 1,
    borderColor: colors.neutral_50,
    borderRadius: radius.lg,
    padding: 10,
  },
  name: {
    fontFamily: "PretendardBold",
    color: colors.neutral_100,
    fontSize: fontSize.md,
  },
  degree: {
    fontFamily: "PretendardBold",
    color: "#FFB30F",
    fontSize: fontSize.xs,
    backgroundColor: "rgba(255, 179, 15, 0.3)",
    borderRadius: radius.md,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
});

export default ProfileScreen;
