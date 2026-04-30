import { Link } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

type InputFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secure?: boolean;
};

const InputField = (props: InputFieldProps) => {
  const { label, value, onChangeText, placeholder, secure } = props;

  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secure}
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 8,
        }}
      />
    </View>
  );
};

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = () => {
    if (!id || !pw) {
      alert('아이디와 비밀번호를 입력하세요.');
      return;
    }
    alert('로그인 성공');
  };

  return (
    // ⭐ 바깥 View (가운데 정렬)
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      {/* ⭐ 안쪽 View (폰 느낌 width 제한) */}
      <View style={{ width: '100%', maxWidth: 400, padding: 20 }}>

        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          로그인
        </Text>

        <InputField
          label="아이디"
          value={id}
          onChangeText={setId}
          placeholder="아이디를 입력하세요"
        />

        <InputField
          label="비밀번호"
          value={pw}
          onChangeText={setPw}
          placeholder="비밀번호를 입력하세요"
          secure
        />

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: '#4CAF50',
            padding: 15,
            borderRadius: 8,
            marginTop: 10,
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>
            로그인
          </Text>
        </TouchableOpacity>

        <Link href="/signup" style={{ marginTop: 15 }}>
          회원가입
        </Link>

      </View>
    </View>
  );
}