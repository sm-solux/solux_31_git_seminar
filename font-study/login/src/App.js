//로그인, 회원가입 페이지 전환
import { useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Result from './pages/Result';

function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState(null);

  return (
    <div>
      {page === 'login' && (
        <Login 
          goSignup={() => setPage('signup')}
          user={ user }
          goResult={(data) => {setPage('result')}}
        />
      )}

      {page === 'signup' && (
        <Signup
          goLogin={() => setPage('login')}
          saveUser={(data) => setUser(data)}
        />
      )}

      {page === 'result' && (
        <Result
          user={user}
          goLogin={() => setPage('login')}
        />
      )}
    </div>
  );
}

export default App;
