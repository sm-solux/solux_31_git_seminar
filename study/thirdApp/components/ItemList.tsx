import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import ItemCard, { Item } from "./ItemCard";
import { colors } from "../constants";

const DUMMY_DATA: Item[] = [
  {
    id: "1",
    name: "버티컬 마우스 팔아요",
    price: 89000,
    image: require("../assets/icon.png"),
    liked: true,
  },
  {
    id: "2",
    name: "제습기 22L",
    price: 390000,
    image: require("../assets/icon.png"),
    liked: true,
  },
  {
    id: "3",
    name: "키보드",
    price: 45000,
    image: require("../assets/icon.png"),
    liked: false,
  },
];

const ItemList = () => {
  return (
    <FlatList
      data={DUMMY_DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ItemCard item={item} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginHorizontal: 10,
    backgroundColor: colors.neutral_60,
  },
});

export default ItemList;
