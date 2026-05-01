import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../constants";
import ItemList from "../components/ItemList";
import FloatingButton from "../components/FloatingButton";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ItemList />
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

export default HomeScreen;
