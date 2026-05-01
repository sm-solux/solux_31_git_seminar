import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import CommunityCard, { CommunityItem } from "./CommunityCard";
import { colors } from "../constants";

const DUMMY_DATA: CommunityItem[] = [
  {
    id: "1",
    category: "일반",
    name: "헬스장 없나요?",
    detail: "효창공원쪽 헬스장 없는지 궁금합니다",
    loc: "효창동",
    date: "3시간 전",
    views: 129,
  },
  {
    id: "2",
    category: "일반",
    name: "용산구에서 러닝하기 좋은 곳 있을까요?",
    detail:
      "운동을 하긴 해야 할 것 같은데 러닝머신은 싫어해서 러닝하기 좋은 곳 찾아요",
    loc: "원효로1가",
    date: "5시간 전",
    views: 14,
  },
  {
    id: "3",
    category: "일반",
    name: "숙대에 줄",
    detail: "지금 숙대 메인거리에 무슨 줄인가요",
    loc: "청파동1가",
    date: "22시간 전",
    views: 159,
  },
];

const CommunityList = () => {
  return (
    <FlatList
      data={DUMMY_DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CommunityCard item={item} />}
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

export default CommunityList;
