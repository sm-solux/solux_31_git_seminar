import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, fontSize, radius } from "../constants";
import IconTextCard from "../components/IconTextCard";

const Contact = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentLayer}>
        <Text style={styles.titleText}>연락처</Text>
        <View style={styles.activityCard}>
          <IconTextCard
            title="Email"
            description="zzye1042@sookmyung.ac.kr"
            iconName="alternate-email"
            titleColor={colors.primary_50}
            descriptionColor={colors.neutral_10}
          />
          <IconTextCard
            title="Github"
            description="github.com/yenbbo"
            iconName="code"
            titleColor={colors.primary_50}
            descriptionColor={colors.neutral_10}
          />
        </View>
        <Text style={styles.titleText}>한 줄 목표</Text>
        <View style={styles.contentBox}>
          <Text style={styles.smDescText}>
            React Native로 프로젝트를 진행하며 UIUX 요소까지 모두 고려할 수 있는
            프론트엔드 개발자가 되는 것이 목표입니다.
          </Text>
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
  smDescText: {
    fontSize: fontSize.sm,
    color: colors.neutral_100,
    textAlign: "center",
    padding: 18,
  },
  activityCard: {
    flexDirection: "column",
    gap: 13,
    marginTop: 13,
    marginBottom: 33,
  },
  contentBox: {
    backgroundColor: colors.primary_50,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
    marginTop: 13,
  },
});

export default Contact;
