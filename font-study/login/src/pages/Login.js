import { useState } from 'react';
import './pages.css'

function Login({ goSignup, user, goResult }) {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = () => {
        if (!id || !pw) {
            setLoginError('아이디와 비밀번호를 입력하세요');
            return;
        }

        if (!user) {
            alert('회원가입을 먼저 해주세요');
            return;
        }

        if (id === user.id && pw === user.pw) {
            goResult();
        } else {
            setLoginError('아이디 또는 비밀번호가 틀렸습니다');
        }
    };

    return (
        <div className="page-wrapper">
            <div className='login-container'>

                <div className="image-section">
                    <img src="https://i.pinimg.com/1200x/54/66/6c/54666cdc4926863755abb25466891456.jpg" alt="characters" />
                </div>

                <div className='login-box'>
                    <span style={{ fontSize: '40px', fontWeight: 'bold', color: '#593d32ec' }}>로그인</span><br />
                    <span>아이디</span><br />
                    <input
                        type="text"
                        placeholder="아이디"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <br />

                    <span>비밀번호</span><br />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                    />
                    <br />

                    {loginError && (
                        <p style={{ fontSize: '14px', color: 'red', marginBottom: '10px' }}>
                            {loginError}
                        </p>
                    )}

                    <button style={{  }} onClick={handleLogin}>로그인</button><br />

                    <span style={{ color: '#aaa', fontSize: '13px' }}>아직 회원이 아니신가요?
                        <span onClick={ goSignup } style={{ cursor: 'pointer', color: '#593d32ec', fontSize: '14px', fontWeight: '500' }}> 회원가입</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Login;