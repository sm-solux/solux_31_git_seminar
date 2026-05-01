import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { colors, fontSize } from "../constants";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
};

const FloatingButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Ionicons name="add" size={18} color={colors.neutral_100} />
      <Text style={styles.label}>글쓰기</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    backgroundColor: colors.primary_50,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 18,
    flexDirection: "row",
    gap: 4,
  },
  label: {
    color: colors.neutral_100,
    fontFamily: "PretendardBold",
    fontSize: fontSize.sm,
  },
});

export default FloatingButton;
