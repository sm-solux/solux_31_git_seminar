import { FlatList } from "react-native";
import React from "react";
import ChatCard, { ChatItem } from "./ChatCard";

const DUMMY_DATA: ChatItem[] = [
  {
    id: "1",
    image: require("../assets/icon.png"),
    name: "예은22",
    loc: "청파동1가",
    date: "1분 전",
    content: "ㅇㅇ님, 어디서 만날까요?",
  },
  {
    id: "2",
    image: require("../assets/icon.png"),
    name: "당근",
    loc: "원효로2가",
    date: "2일 전",
    content: "매너 거래 감사합니다 좋은 하루 되세요",
  },
  {
    id: "3",
    image: require("../assets/icon.png"),
    name: "문현빈짱",
    loc: "공덕동",
    date: "2달 전",
    content: "거래 후기를 남겨보세요.",
  },
  {
    id: "4",
    image: require("../assets/icon.png"),
    name: "안타좀쳐라",
    loc: "청파동1가",
    date: "2달 전",
    content:
      "ㅇㅇ님, 거래 잘 하셨나요? 거래한 이웃에게 따뜻한 마음을 전해보세요!",
  },
];

const ChatList = () => {
  return (
    <FlatList
      data={DUMMY_DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatCard item={item} />}
    />
  );
};

export default ChatList;
