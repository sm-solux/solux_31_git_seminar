import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors, fontSize, radius } from "../constants";
import { Ionicons } from "@expo/vector-icons";

export type Item = {
  id: string;
  name: string;
  price: number;
  image: any;
  liked: boolean;
};

type ItemProps = {
  item: Item;
};

const ItemCard = ({ item }: ItemProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={item.image} />
      <View style={styles.contentContainer}>
        <View>
          <View style={styles.contentTitleContainer}>
            <Text
              style={styles.itemName}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <Ionicons
              name="ellipsis-vertical"
              size={18}
              color={colors.neutral_100}
            />
          </View>
          <Text style={styles.itemPrice}>{item.price.toLocaleString()}원</Text>
        </View>

        <Ionicons
          style={styles.heartIcon}
          name={item.liked ? "heart" : "heart-outline"}
          size={18}
          color={colors.neutral_70}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: colors.neutral_10,
    borderRadius: radius.md,
  },
  contentContainer: {
    flex: 1,
    paddingStart: 16,
    justifyContent: "space-between",
  },
  contentTitleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  itemName: {
    fontFamily: "PretendardRegular",
    color: colors.neutral_100,
    fontSize: fontSize.sm,
  },
  itemPrice: {
    fontFamily: "PretendardBold",
    color: colors.neutral_100,
    fontSize: fontSize.sm,
  },
  heartIcon: {
    alignSelf: "flex-end",
  },
});

export default ItemCard;
