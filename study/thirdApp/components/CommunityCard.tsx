import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, fontSize, radius } from "../constants";
import { Ionicons } from "@expo/vector-icons";

export type CommunityItem = {
  id: string;
  category: string;
  name: string;
  detail: string;
  loc: string;
  date: string;
  views: number;
};

type CommunityItemProps = {
  item: CommunityItem;
};

const CommunityCard = ({ item }: CommunityItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.itemFilter}>{item.category}</Text>
        <Ionicons
          name="ellipsis-vertical"
          size={18}
          color={colors.neutral_100}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.itemName} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.itemDetail} numberOfLines={1} ellipsizeMode="tail">
          {item.detail}
        </Text>
        <View style={styles.infoIconContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>{item.loc}</Text>
            <Text style={styles.info}>{item.date}</Text>
            <Text style={styles.info}>조회 {item.views.toLocaleString()}</Text>
          </View>
          <Ionicons
            name="chatbox-ellipses"
            size={18}
            color={colors.neutral_70}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 8,
  },
  infoContainer: {
    flexDirection: "row",
    gap: 8,
  },
  infoIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 6,
  },
  itemFilter: {
    fontFamily: "PretendardRegular",
    color: colors.neutral_100,
    fontSize: fontSize.xs,
    backgroundColor: colors.neutral_60,
    borderRadius: radius.sm,
    padding: 2,
  },
  itemName: {
    fontFamily: "PretendardRegular",
    color: colors.neutral_100,
    fontSize: fontSize.md,
  },
  itemDetail: {
    fontFamily: "PretendardRegular",
    color: colors.neutral_100,
    fontSize: fontSize.sm,
    paddingTop: 6,
  },
  info: {
    fontFamily: "PretendardRegular",
    color: colors.neutral_70,
    fontSize: fontSize.xs,
  },
});

export default CommunityCard;
