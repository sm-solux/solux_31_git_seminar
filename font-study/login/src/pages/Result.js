import './pages.css'

function Result({ user, goLogin }) {
    return (
        <div className='result-container'>
            <div className='result-box'>
                <span style={{ fontSize: '40px', fontWeight: 'bold', color: '#593d32ec' }}>
                회원 정보
            </span>
                <span>아이디: {user.id || ''}</span>
                <span>비밀번호: {user.pw || ''}</span>
                <span>이메일: {user.email || ''}</span>
                <span>생년월일: {user.birth || ''}</span>
                <span>성별: {user.gender || ''}</span>
                <span>국적: {user.nationality || ''}</span>

                <button onClick={goLogin}>로그인으로 돌아가기</button>
            </div>
        </div>
    );
}

export default Result;