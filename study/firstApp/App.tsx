/* 
- UI 구성
    - 로그인 화면
    - 회원가입 화면
    - 화면 전환 (로그인 ↔ 회원가입)
- 상태 관리
    - 해당 스택에 따라
        - fluttter - `setState` 또는 `Provider`
        - react - `useState`
    - input 값 상태 관리
    - 체크박스 / 라디오 상태
- 입력값 처리
    - 아이디 입력
    - 비밀번호 입력
    - 이메일 입력
- 유효성 검사
    - 비밀번호 8자 이상
    - 이메일 형식 검사
    - 비밀번호 확인 일치 여부
- 이벤트 처리
    - 버튼 클릭 (로그인 / 회원가입)
    - 라디오 선택
    - 드롭다운 변경
*/

import { StyleSheet } from "react-native";
import Login from "./components/Login";
import Sign from "./components/Sign";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackParamList = {
  Login: undefined;
  Sign: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    PretendardRegular: require("./assets/font/pretendard-Regular.otf"),
    PretendardBold: require("./assets/font/pretendard-Bold.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign" component={Sign} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
