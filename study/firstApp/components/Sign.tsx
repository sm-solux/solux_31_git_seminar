import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";
import RadioButton from "./RadioButton";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

type Props = NativeStackScreenProps<RootStackParamList, "Sign">;

type signForm = {
  name: string;
  userId: string;
  pw: string;
  pwCheck: string;
  birth: Date;
  gender: "male" | "female";
  phone: string;
  email: string;
  country: string;
};

type signErrors = {
  email: string;
  pw: string;
  pwCheck: string;
};

const Sign = ({ navigation }: Props) => {
  const [form, setForm] = useState<signForm>({
    name: "",
    userId: "",
    pw: "",
    pwCheck: "",
    birth: new Date(),
    gender: "female",
    phone: "",
    email: "",
    country: "",
  });

  const [errors, setErrors] = useState<signErrors>({
    email: "",
    pw: "",
    pwCheck: "",
  });

  const [showPicker, setShowPicker] = useState(false);

  const updateForm = <K extends keyof signForm>(key: K, value: signForm[K]) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // 유효성 검사 (이메일, 비밀번호)
  const validateEmail = (email: string) => {
    if (!email.trim()) return "이메일을 입력해주세요.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "올바른 이메일 형식이 아닙니다.";

    return "";
  };

  const validatePw = (pw: string) => {
    if (!pw.trim()) return "비밀번호를 입력해주세요.";
    if (pw.length < 10) return "비밀번호는 10자 이상이어야 합니다.";
    return "";
  };

  const validatePwCheck = (pw: string, pwCheck: string) => {
    if (!pwCheck.trim()) return "비밀번호 확인을 입력해주세요.";
    if (pw !== pwCheck) return "비밀번호가 일치하지 않습니다.";
    return "";
  };

  const validateForm = () => {
    const newErrors = {
      email: validateEmail(form.email),
      pw: validatePw(form.pw),
      pwCheck: validatePwCheck(form.pw, form.pwCheck),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };

  // 폼 제출
  const onSubmit = () => {
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    console.log("회원가입 가능", form);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.inline}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={styles.title}>{"<"}</Text>
            </Pressable>
            <Text style={styles.title}>회원가입</Text>
          </View>
          <Text style={{ marginBottom: 40 }}>
            기본 정보와 연락처를 입력해 가입해주세요.
          </Text>
          {/* Form */}
          <Text style={styles.label}>이름</Text>
          <TextInput
            style={styles.input}
            placeholder="이름을 입력하세요"
            autoCapitalize="none"
            value={form.name}
            onChangeText={(text) => updateForm("name", text)}
          ></TextInput>
          <Text style={styles.label}>아이디</Text>
          <TextInput
            style={styles.input}
            placeholder="최대 16자 영문/숫자"
            autoCapitalize="none"
            value={form.userId}
            onChangeText={(text) => updateForm("userId", text)}
          ></TextInput>

          <Text style={styles.label}>비밀번호</Text>
          <TextInput
            style={styles.input}
            placeholder="영문/숫자/특수문자 포함 10자 이상"
            secureTextEntry
            autoCapitalize="none"
            value={form.pw}
            onChangeText={(text) => updateForm("pw", text)}
            onBlur={() => {
              setErrors((prev) => ({
                ...prev,
                pw: validatePw(form.pw),
              }));
            }}
          ></TextInput>
          {errors.pw ? <Text style={styles.error}>{errors.pw}</Text> : null}
          <Text style={styles.label}>비밀번호 확인</Text>
          <TextInput
            style={styles.input}
            placeholder="비밀번호를 다시 입력하세요"
            secureTextEntry
            autoCapitalize="none"
            value={form.pwCheck}
            onChangeText={(text) => updateForm("pwCheck", text)}
            onBlur={() => {
              setErrors((prev) => ({
                ...prev,
                pwCheck: validatePwCheck(form.pw, form.pwCheck),
              }));
            }}
          ></TextInput>
          {errors.pwCheck ? (
            <Text style={styles.error}>{errors.pwCheck}</Text>
          ) : null}

          <Text style={styles.label}>생년월일</Text>
          <Pressable style={styles.input} onPress={() => setShowPicker(true)}>
            <Text>{form.birth.toISOString().split("T")[0]}</Text>
          </Pressable>
          {showPicker && (
            <DateTimePicker
              value={form.birth}
              mode="date"
              onChange={(e, selectedDate) => {
                setShowPicker(false);
                if (selectedDate) updateForm("birth", selectedDate);
              }}
            />
          )}

          <Text style={styles.label}>성별</Text>
          <View style={styles.gender}>
            <Pressable onPress={() => updateForm("gender", "female")}>
              <View style={styles.inline_inside}>
                <RadioButton selected={form.gender === "female"} />
                <Text>여성</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => updateForm("gender", "male")}>
              <View style={styles.inline_inside}>
                <RadioButton selected={form.gender === "male"} />
                <Text>남성</Text>
              </View>
            </Pressable>
          </View>

          <Text style={styles.label}>휴대폰 번호</Text>
          <TextInput
            value={form.phone}
            style={styles.input}
            placeholder="01012345678"
            keyboardType="phone-pad"
            onChangeText={(text) => updateForm("phone", text)}
          ></TextInput>

          <Text style={styles.label}>이메일</Text>
          <TextInput
            value={form.email}
            style={styles.input}
            placeholder="example@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => updateForm("email", text)}
            onBlur={() => {
              setErrors((prev) => ({
                ...prev,
                email: validateEmail(form.email),
              }));
            }}
          ></TextInput>
          {errors.email ? (
            <Text style={styles.error}>{errors.email}</Text>
          ) : null}

          <Text style={styles.label}>국적</Text>
          <Picker
            selectedValue={form.country}
            onValueChange={(item) => updateForm("country", item)}
          >
            <Picker.Item label="선택하세요" value="" />
            <Picker.Item label="한국" value="kr" />
            <Picker.Item label="미국" value="us" />
            <Picker.Item label="영국" value="uk" />
          </Picker>

          <Pressable
            style={styles.button}
            onPress={() => {
              onSubmit();
            }}
          >
            <Text style={styles.buttonText}>회원가입 완료</Text>
          </Pressable>
          <View style={styles.inline_inside}>
            <Text>이미 회원이신가요?</Text>
            <Text
              style={styles.signText}
              onPress={() => {
                navigation.goBack();
              }}
            >
              로그인
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 40,
  },
  title: {
    fontFamily: "PretendardBold",
    fontSize: 28,
    marginBottom: 8,
  },
  inline: {
    flexDirection: "row",
    gap: 10,
  },
  inline_inside: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
  },
  gender: {
    flexDirection: "row",
    gap: 40,
    padding: 14,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: "#ccc",
    marginBottom: 20,
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
  button: {
    backgroundColor: "#121212",
    padding: 14,
    borderRadius: 14,
    marginTop: 20,
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
  signText: {
    fontFamily: "PretendardBold",
  },
  error: {
    color: "#b22427",
    fontSize: 12,
    marginTop: -12,
    marginBottom: 12,
  },
});

export default Sign;
