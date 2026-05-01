import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors, fontSize, radius } from "../constants";

export type ChatItem = {
  id: string;
  image: any;
  name: string;
  loc: string;
  date: string;
  content: string;
};

type ChatItemProps = {
  item: ChatItem;
};

const ChatCard = ({ item }: ChatItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("../assets/icon.png")}
      />
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.info}>{item.loc}</Text>
          <Text style={styles.info}>{item.date}</Text>
        </View>
        <Text style={styles.itemDetail} numberOfLines={1} ellipsizeMode="tail">
          {item.content}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: colors.neutral_10,
    borderRadius: radius.xl,
  },
  contentContainer: {
    flex: 1,
    marginStart: 18,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  itemName: {
    fontFamily: "PretendardRegular",
    color: colors.neutral_100,
    fontSize: fontSize.md,
  },
  itemDetail: {
    fontFamily: "PretendardRegular",
    color: colors.neutral_70,
    fontSize: fontSize.sm,
    paddingTop: 6,
  },
  info: {
    fontFamily: "PretendardRegular",
    color: colors.neutral_70,
    fontSize: fontSize.xs,
  },
});

export default ChatCard;
