import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../constants";
import ChatList from "../components/ChatList";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ChatList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral_10,
  },
});

export default ChatScreen;
