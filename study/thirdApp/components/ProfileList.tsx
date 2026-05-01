import { View, Text, ScrollView } from "react-native";
import React from "react";
import ProfileCard, { ProfileCardData } from "./ProfileCard";

const DUMMY_DATA: ProfileCardData[] = [
  {
    title: "나의 거래",
    items: [
      { icon: "receipt-outline", label: "판매관리" },
      { icon: "bag-outline", label: "구매내역" },
      { icon: "contract-outline", label: "내 물건 가격 찾기" },
      { icon: "journal-outline", label: "중고거래 가계부" },
    ],
  },
  {
    title: "나의 관심",
    items: [
      { icon: "heart-outline", label: "관심목록" },
      { icon: "pricetag-outline", label: "키워드 알림 설정" },
    ],
  },
  {
    title: "나의 활동",
    items: [{ icon: "document-text-outline", label: "내 동네생활 글" }],
  },
  {
    title: "설정",
    items: [
      { icon: "location-outline", label: "내 동네 설정" },
      { icon: "locate-outline", label: "동네 인증하기" },
      { icon: "scan-circle-outline", label: "QR 코드 스캔" },
      { icon: "settings-outline", label: "앱 설정" },
    ],
  },
  {
    title: "고객지원",
    items: [
      { icon: "megaphone-outline", label: "공지사항" },
      { icon: "call-outline", label: "고객센터" },
      { icon: "mail-outline", label: "의견 남기기" },
      { icon: "add-circle-outline", label: "당근 더 알아보기" },
      { icon: "information-outline", label: "약관 및 정책" },
    ],
  },
];

const ProfileList = () => {
  return (
    <View>
      {DUMMY_DATA.map((card) => (
        <ProfileCard key={card.title} data={card} />
      ))}
    </View>
  );
};

export default ProfileList;
