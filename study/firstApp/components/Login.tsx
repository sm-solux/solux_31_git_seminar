import {
  Keyboard,
  Pressable,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Text from "./CustomText";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation }: Props) => {
  type LoginForm = {
    userId: string;
    pw: string;
  };

  const [login, setLogin] = useState<LoginForm>({
    userId: "",
    pw: "",
  });

  const [checked, setChecked] = useState(false);

  const updateForm = <K extends keyof LoginForm>( // K = "userId" | "pw"
    key: K,
    value: LoginForm[K],
  ) => {
    setLogin((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>로그인</Text>
        <Text style={{ marginBottom: 40 }}>다시 오신 것을 환영해요.</Text>

        <Text style={styles.label}>아이디</Text>
        <TextInput
          style={styles.input}
          placeholder="아이디를 입력하세요"
          autoCapitalize="none"
          onChangeText={(text) => updateForm("userId", text)}
        ></TextInput>

        {/* 비밀번호 8자리 이상 확인 */}
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.input}
          placeholder="비밀번호를 입력하세요"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(text) => updateForm("pw", text)}
        ></TextInput>

        <View style={styles.inline}>
          <View style={styles.inline_inside}>
            <Checkbox value={checked} onValueChange={setChecked}></Checkbox>
            <Text>로그인 상태 유지</Text>
          </View>
          <Text>비밀번호 찾기</Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => {
            console.log(login);
          }}
        >
          {/* 로그인 데이터 전달하기 */}
          <Text style={styles.buttonText}>로그인</Text>
        </Pressable>

        <View style={styles.line} />

        <Pressable style={styles.reverseButton}>
          <Text style={styles.reverseButtonText}>이메일로 계속하기</Text>
        </Pressable>

        <Pressable style={styles.reverseButton}>
          <Text style={styles.reverseButtonText}>소셜 로그인</Text>
        </Pressable>
        <View style={styles.inline_inside}>
          <Text>아직 회원이 아니신가요?</Text>
          <Text
            style={styles.signText}
            onPress={() => {
              navigation.navigate("Sign");
            }}
          >
            회원가입
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 24,
  },
  title: {
    fontFamily: "PretendardBold",
    fontSize: 28,
    marginBottom: 8,
  },
  label: {
    fontFamily: "PretendardBold",
    marginBottom: 8,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inline_inside: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#121212",
    padding: 14,
    borderRadius: 14,
    marginBottom: 20,
  },
  reverseButton: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "PretendardBold",
    fontSize: 16,
  },
  reverseButtonText: {
    color: "#121212",
    textAlign: "center",
    fontFamily: "PretendardBold",
    fontSize: 16,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginTop: 20,
    marginBottom: 40,
  },
  signText: {
    fontFamily: "PretendardBold",
  },
});

export default Login;
