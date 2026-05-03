import { useState } from 'react';
import './pages.css'

// 라디오 버튼
function GenderRadio({ gender, setGender }) {
    return (
        <div className='gRadio'>
            <span>성별</span>
            <div className='radio-box'>
                <label>
                    <input
                    type='radio'
                    name='gender'
                    value='여성'
                    checked={gender === '여성'}
                    onChange={(e) => setGender(e.target.value)}
                    />
                    여성
                </label>

                <label>
                    <input
                        type='radio'
                        name='gender'
                        value='남성'
                        checked={gender === '남성'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    남성
                </label>
            </div>
        </div>
    );
}

// 드롭다운
function NationalitySelect({ nationality, setNationality }) {
    return (
        <div className='nSelect'>
            <span>국적</span><br />

            <select
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
            >
                <option>국적을 선택하세요</option>
                <option value='korea'>한국</option>
                <option value='usa'>미국</option>
                <option value='japan'>일본</option>
                <option value='china'>중국</option>
            </select>
        </div>
    );
}


function Signup({ goLogin, saveUser }) {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [error, setError] = useState({ email: '', password: '', passwordCheck: '', ess: '' });

    const validate = () => {
    let newError = { email: '', password: '', passwordCheck: '', ess: '' };

    if (!id || !pw || !pwCheck) {               // 필수 항목 입력
        newError.ess = '필수 항목*을 입력하세요'
    }

    if (email && !email.includes('@')) {        // 이메일 검사
        newError.email = '이메일 형식이 아닙니다';
    }

    if (pw && pw.length < 8) {                        // 비밀번호 8자 이상
        newError.password = '비밀번호는 8자 이상이어야 합니다';
    }

    if (pw !== pwCheck) {                       // 비밀번호 확인
        newError.passwordCheck = '비밀번호가 일치하지 않습니다';
    }

    setError(newError);

    return !newError.email && !newError.password && !newError.passwordCheck && !newError.ess;       // 하나라도 에러 있으면 X
    };

    const handleSignup = () => {
        if (!validate()) return;

        const userData = { id, pw, email, birth, gender, nationality };

        alert(`회원가입 완료\nID: ${id}`);
        saveUser(userData);
        goLogin();
    };

    return (
        <div className="page-wrapper">
            <div className='signup-container'>

                <div style={{ paddingBottom: '30px' }}>
                    <span style={{ fontSize: '40px', fontWeight: 'bold', color: '#593d32ec' }}>회원가입</span>
                </div>

                <div className='signup-box'>
                    <span>아이디*</span><br />
                    <input
                        type="text"
                        placeholder="아이디"
                        value={id}
                        onChange={(e) => {
                            setId(e.target.value);
                            setError('');
                        }}
                    /><br />


                    <span>비밀번호*</span><br />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={pw}
                        onChange={(e) => {
                            setPw(e.target.value);
                            setError({ ...error, password: '' });
                        }}
                    /><br />
                    {error.password && (
                        <span className="error-text">
                            {error.password}
                        </span>
                    )}<br />


                    <span>비밀번호 확인*</span><br />
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        value={pwCheck}
                        onChange={(e) => {
                            setPwCheck(e.target.value);
                            setError({ ...error, passwordCheck: '' });
                        }}
                    /><br />
                    {error.passwordCheck && (
                        <span className="error-text">
                            {error.passwordCheck}
                        </span>
                    )}<br />

                    <span style={{ color: '#aaa', fontSize: '13px' }}>선택</span><hr />


                    <span>이름</span><br />
                    <input 
                        type='text'
                        placeholder='이름'
                    /><br />


                    <span>이메일</span><br />
                    <input
                        type='email'
                        placeholder='이메일'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError({ ...error, email: '' });
                        }}
                    /><br />
                    {error.email && (
                        <span className="error-text">
                            {error.email}
                        </span>
                    )}<br />


                    <span>생년월일</span><br />
                    <input 
                        type='date'
                        value={birth}
                        onChange={(e) => setBirth(e.target.value)}
                    /><br />

                    <GenderRadio gender={ gender } setGender={ setGender } />

                    <NationalitySelect nationality={ nationality } setNationality={ setNationality } />

                    {error.ess && (
                        <span className="error-text">
                            {error.ess}
                        </span>
                    )}<br />

                    <button onClick={handleSignup}>회원가입</button>

                    <span onClick={goLogin} style={{ cursor: 'pointer', color: '#593d32', fontWeight: '500', display: 'block', textAlign: 'center' }}>
                        로그인으로 돌아가기
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Signup;