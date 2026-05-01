import * as React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import Text from "../components/customText";
import { colors, fontSize, radius } from "../constants";
import TagButton, { TagProps } from "../components/TagButton";
import InfoCard, { InfoProps } from "../components/InfoCard";

const infos: InfoProps[] = [
  { label: "전공", value: "CS" },
  { label: "관심", value: "React/UIUX" },
  { label: "성향", value: "성실함" },
];

const tags: TagProps[] = [
  { label: "학습", iconName: "menu-book" },
  { label: "UI", iconName: "color-lens" },
  { label: "협업", iconName: "groups" },
];

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentLayer}>
        {/* 프로필 */}
        <View style={styles.profileBox}>
          <Image
            source={require("../../assets/profile.jpg")}
            style={styles.profileImg}
          />
          <Text style={styles.titleText}>김예은</Text>
          <Text style={styles.subText}>프론트엔드 & UIUX 디자인 학습자</Text>
          <Text style={styles.descText}>
            UIUX를 고려하여 사용자가 편안함을 느낄 수 있는 화면을 만들고
            싶습니다.
          </Text>
          {/* 카드 추가 */}
          <View style={styles.infoBox}>
            {infos.map((item) => (
              <InfoCard
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </View>
        </View>

        {/* 버튼 추가 */}
        <View style={styles.buttonBox}>
          {tags.map((item) => (
            <TagButton
              key={item.label}
              label={item.label}
              iconName={item.iconName}
            />
          ))}
        </View>

        {/* About Me */}
        <View style={styles.contentLayer_2}>
          <Text style={styles.titleText}>About Me</Text>
          <View style={styles.contentBox}>
            <Text style={styles.smDescText}>
              사용자의 입장에서 생각하는 화면을 만드는 것을 중요하게 생각합니다.
              React Native로 직접 앱을 구현하며 구조와 상태 관리를 배우고
              있습니다. 직관적이고 편안한 UI를 만드는 개발자가 되고 싶습니다.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral_100,
  },
  profileBox: {
    paddingVertical: 38,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderRadius: radius.lg,
    borderColor: colors.primary_50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 21,
  },
  contentLayer: {
    paddingHorizontal: 20,
  },
  contentLayer_2: {
    paddingHorizontal: 10,
    marginVertical: 33,
  },
  infoBox: {
    flexDirection: "row",
    gap: 14,
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 18,
  },
  buttonBox: {
    flexDirection: "row",
    gap: 35,
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 18,
  },
  contentBox: {
    backgroundColor: colors.primary_50,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
    marginTop: 13,
  },
  titleText: {
    fontSize: fontSize.lg,
    fontFamily: "PretendardBold",
    color: colors.neutral_10,
  },
  subText: {
    fontSize: fontSize.md,
    fontFamily: "PretendardBold",
    color: colors.neutral_10,
  },
  descText: {
    fontSize: fontSize.md,
    color: colors.neutral_10,
    textAlign: "center",
    marginTop: 18,
  },
  smDescText: {
    fontSize: fontSize.sm,
    color: colors.neutral_100,
    textAlign: "center",
    padding: 18,
  },
  profileImg: {
    width: 58,
    height: 58,
    borderRadius: radius.md,
    marginBottom: 18,
  },
});

export default Home;
