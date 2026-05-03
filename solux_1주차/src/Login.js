import React, { useState } from 'react';
function Login({onSwitch}) {
const [password, setPassword] = useState('');
const [id, setId]=useState('');
const [maintain, setMaintain]= useState(false);

const handlepwChange = (event) => {setPassword(event.target.value);}
const handleidChange = (event) => {setId(event.target.value);}
const handlemtChange = (event) => {setMaintain(event.target.checked);} 
const handleSubmit = async (event) => {
  event.preventDefault();
if (!id || !password) {
    alert("아이디와 비밀번호를 모두 입력하세요.");
  }
  else{
    try {
   
    const response = await fetch(`http://localhost:3001/users?userID=${id}&password=${password}`);
    const data = await response.json(); 

    if (data.length > 0) {
      alert(` 환영합니다!`);
      
      
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  } catch (error) {
    alert("서버 연결에 실패했습니다. json-server를 확인하세요!");
  }
  }
  
};
return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
    <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap:'10px'}}>
          <input type="text" value={id} onChange={handleidChange} placeholder="id"style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}/>
          <input type="password" value={password} onChange={handlepwChange} placeholder="비밀번호"style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}/>
            <button type="submit"style={{width:'100%',border: 'none',borderRadius:'4px',fonWeight:'bold',padding: '10px',color:'white',backgroundColor:'#007bff'}}>로그인</button>
       </div>
       <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-start', marginTop: '8px', paddingLeft: '2px' }}>
          <label style={{ fontSize:'12px',color:'gray'}}>
            <input type="checkbox" checked={maintain} onChange={handlemtChange}style={{ verticalAlign: 'middle', marginRight: '5px' }} /> 로그인 유지
            </label>
            </div>
       

      </form>
      <p style={{marginTop: '10px',fontSize: '12px' }} >
        <span style={{color: 'gray'}}>계정이 없으신가요?</span>
        <span onClick={onSwitch} style={{cursor:'pointer',color: 'blue',fontWeight: 'bold'}}>회원가입</span>
      </p>
    </div>
  );
}

export default Login;
