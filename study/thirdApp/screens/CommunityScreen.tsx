import { View, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../constants";
import CommunityList from "../components/CommunityList";
import FloatingButton from "../components/FloatingButton";

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <CommunityList />
      <FloatingButton onPress={() => console.log("글쓰기 클릭")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral_10,
  },
});

export default CommunityScreen;
