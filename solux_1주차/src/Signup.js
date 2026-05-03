import React, {useState} from 'react';
function Signup({onSwitch}){
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[grade, setGrade] = useState('1');
    const[confirmpassword, setConfirmpassword]=useState('');
    const [id, setId]=useState('');
    const [field, setField] = useState('frontend');
    const handleidChange = (event) => {setId(event.target.value);}
    const handleEmailChange = (event) => { setEmail(event.target.value);}
    const handlepwChange = (event) => {setPassword(event.target.value);}
    const handlecpwChange = (event) => {setConfirmpassword(event.target.value);}
    const handleFieldChange = (event) => {setField(event.target.value);}
    const validateEmail = (email) => {const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email); };
    const handleSubmit=async(event)=>{ event.preventDefault();
        if(!id ||!email||!password||!confirmpassword){
          alert("모든 정보를 입력해주세요.")
        }
        else if (password!==confirmpassword){
            alert("비밀번호가 일치하지 않습니다. ");
            return;
        }
        else if (password.length < 8) {
            alert("비밀번호는 8자리 이상이어야 합니다!");
            return; 
        }
        else if (!validateEmail(email)) {
           alert("올바른 이메일 형식이 아닙니다!");
           return;
        }
        else{
        const User={userID: id, email, password, grade, field};
        try {
           const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(User), 
          }); 


         if (response.ok) {
          alert("회원가입 성공");
          onSwitch(); 
          }
          } catch (error) {
             alert("서버 꺼짐 또는 연결 실패");
            }
            }
            };


return(
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
    <h2>회원가입</h2>
     <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column" ,gap:'20px'}}>
        <input type="text" value={id} onChange={handleidChange} placeholder="id"style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}placeholder="password"style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        <input type="password" value={confirmpassword} onChange={(event)=>setConfirmpassword(event.target.value)}placeholder="비밀번호 확인"
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <input type="email"value={email} onChange={(event)=>setEmail(event.target.value)}placeholder="email"style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <select value={field} onChange={handleFieldChange} style={{ width: '100%', padding: '10px' }}>
    <option value="frontend">프론트엔드</option>
    <option value="backend">백엔드</option>
    <option value="pm">기획</option>
    <option value="design">디자인</option>
  </select>
  <div style={{ display: 'flex' }}>
    <input type="radio" name="grade" value="1" checked={grade === '1'} onChange={(event) => setGrade(event.target.value)} /> 1학년
      <input type="radio" name="grade" value="2" checked={grade === '2'} onChange={(event) => setGrade(event.target.value)} /> 2학년
      <input type="radio" name="grade" value="3" checked={grade === '3'} onChange={(event) => setGrade(event.target.value)} /> 3학년  
      <input type="radio" name="grade" value="4" checked={grade === '4'} onChange={(event) => setGrade(event.target.value)} /> 4학년  
      </div>
      </div>
       <button type="submit" style={{width:'100%',border: 'none',borderRadius:'4px',fonWeight:'bold',padding: '10px',color:'white',backgroundColor:'#007bff'}}>회원가입 완료</button>

    </form>
    <p style={{marginTop: '10px',fontSize: '12px' }} >
        <span style={{color: 'gray'}}>계정이 있으신가요?</span>
        <span onClick={onSwitch} style={{color: 'blue',fontWeight: 'bold',cursor:'pointer'}}>로그인</span>
      </p>
    </div>
)
}
export default Signup;