import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, fontSize, radius } from "../constants";
import SkillCard, { SkillProps } from "../components/SkillCard";

const skills: SkillProps[] = [
  { label: "React Native", value: 30 },
  { label: "React", value: 75 },
  { label: "HTML/CSS", value: 89 },
  { label: "TypeScript", value: 10 },
];

const Skill = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentLayer}>
        <Text style={styles.titleText}>배우고 있는 기술</Text>
        <View style={styles.skillCard}>
          {skills.map((item) => (
            <SkillCard key={item.label} label={item.label} value={item.value} />
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
  skillCard: {
    gap: 13,
    marginVertical: 13,
  },
});

export default Skill;
