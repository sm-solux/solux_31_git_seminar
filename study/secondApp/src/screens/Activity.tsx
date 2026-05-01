import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, fontSize } from "../constants";
import IconTextCard, { IconTextCardProps } from "../components/IconTextCard";

const activities: IconTextCardProps[] = [
  {
    title: "로그인&회원가입 앱 화면 제작",
    description:
      "React Native를 익히며 화면 구조를 직접 작성해 보고 상태 관리를 연습했습니다.",
    iconName: "phone-iphone",
  },
  {
    title: "카페 재고 관리 웹페이지 제작",
    description:
      "React로 재고 등록, 수량 조절, 검색, 카테고리/발주 필요 필터, 상세피이지 수정/삭제 기능을 구현했습니다.",
    iconName: "web",
  },
];

const Activity = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentLayer}>
        <Text style={styles.titleText}>최근 활동</Text>
        <View style={styles.activityCard}>
          {activities.map((item) => (
            <IconTextCard
              title={item.title}
              description={item.description}
              iconName={item.iconName}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral_100,
  },
  contentLayer: {
    paddingHorizontal: 30,
    marginTop: 11,
  },
  titleText: {
    fontSize: fontSize.lg,
    fontWeight: "bold",
    color: colors.neutral_10,
  },
  activityCard: {
    flexDirection: "column",
    gap: 13,
    marginTop: 13,
  },
});

export default Activity;
