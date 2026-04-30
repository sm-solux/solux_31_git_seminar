import { Picker } from '@react-native-picker/picker';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

type InputFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secure?: boolean;
  error?: string;
};

const InputField = (props: InputFieldProps) => {
  const { label, value, onChangeText, placeholder, secure, error } = props;

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
          borderColor: error ? 'red' : '#ccc',
          padding: 12,
          borderRadius: 8,
        }}
      />

      {error ? (
        <Text style={{ color: 'red', marginTop: 5 }}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};

export default function Signup() {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  const [gender, setGender] = useState('');
  const [role, setRole] = useState('user');

  // ✅ 에러 상태
  const [errors, setErrors] = useState({
    email: '',
    pw: '',
    confirmPw: '',
  });

  // ✅ 다중 체크박스
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });

  const toggleAgree = (key: keyof typeof agreements) => {
    setAgreements({
      ...agreements,
      [key]: !agreements[key],
    });
  };

  const isAllChecked =
    agreements.terms &&
    agreements.privacy &&
    agreements.marketing;

  const validate = () => {
    let valid = true;
    const newErrors = {
      email: '',
      pw: '',
      confirmPw: '',
    };

    if (!email.includes('@') || !email.includes('.')) {
      newErrors.email = '유효한 이메일을 입력하세요.';
      valid = false;
    }

    if (pw.length < 8) {
      newErrors.pw = '비밀번호는 8자 이상이어야 합니다.';
      valid = false;
    }

    if (pw !== confirmPw) {
      newErrors.confirmPw = '비밀번호가 일치하지 않습니다.';
      valid = false;
    }

    if (!isAllChecked) {
      alert('모든 약관에 동의해야 합니다.');
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignup = () => {
    if (!validate()) return;
    alert('회원가입 성공');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ width: '100%', maxWidth: 400, padding: 20 }}>

        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          회원가입
        </Text>

        <InputField
          label="이메일"
          value={email}
          onChangeText={setEmail}
          placeholder="이메일을 입력하세요"
          error={errors.email}
        />

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
          placeholder="비밀번호를 입력하세요(8자 이상)"
          secure
          error={errors.pw}
        />

        <InputField
          label="비밀번호 확인"
          value={confirmPw}
          onChangeText={setConfirmPw}
          placeholder="비밀번호를 다시 입력하세요"
          secure
          error={errors.confirmPw}
        />

        {/* 약관 동의 */}
        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>약관 동의</Text>

        <TouchableOpacity onPress={() => toggleAgree('terms')}>
          <Text>
            {agreements.terms ? '☑ 이용약관 동의' : '☐ 이용약관 동의'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleAgree('privacy')}>
          <Text>
            {agreements.privacy
              ? '☑ 개인정보 처리방침 동의'
              : '☐ 개인정보 처리방침 동의'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleAgree('marketing')}>
          <Text>
            {agreements.marketing
              ? '☑ 마케팅 정보 수신 동의'
              : '☐ 마케팅 정보 수신 동의'}
          </Text>
        </TouchableOpacity>

        {/* 전체 동의 */}
        <TouchableOpacity
          onPress={() =>
            setAgreements({
              terms: true,
              privacy: true,
              marketing: true,
            })
          }
        >
          <Text style={{ marginTop: 10 }}>
            {isAllChecked ? '☑ 전체 동의' : '☐ 전체 동의'}
          </Text>
        </TouchableOpacity>

        {/* 성별 */}
        <Text style={{ marginTop: 10 }}>성별</Text>
        <TouchableOpacity onPress={() => setGender('남자')}>
          <Text>{gender === '남자' ? '🔘 남자' : '⚪ 남자'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('여자')}>
          <Text>{gender === '여자' ? '🔘 여자' : '⚪ 여자'}</Text>
        </TouchableOpacity>

        {/* 역할 */}
        <Text style={{ marginTop: 10 }}>역할</Text>
        <Picker selectedValue={role} onValueChange={setRole}>
          <Picker.Item label="사용자" value="user" />
          <Picker.Item label="관리자" value="admin" />
        </Picker>

        {/* 버튼 */}
        <TouchableOpacity
          onPress={handleSignup}
          style={{
            backgroundColor: '#2196F3',
            padding: 15,
            borderRadius: 8,
            marginTop: 15,
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>
            회원가입
          </Text>
        </TouchableOpacity>

        <Link href="/" style={{ marginTop: 15 }}>
          로그인으로 돌아가기
        </Link>

      </View>
    </View>
  );
}