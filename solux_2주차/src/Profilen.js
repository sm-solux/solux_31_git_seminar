import React,{useState} from 'react';
function Profilen(){
    const[show, setshow]=useState(false);
    const handleClick =()=>{
        setshow(!show);
    };
    return(<div>
    <div className="card" style={{color: "white"}}>
        <h2>Experience & Activities</h2>            
            <p>논리적 추론과 추상적 구조의 최적화 과정을 학습하며, 이를 알고리즘 설계에 적용하는 연습을 하고 있습니다.
              HTML, CSS, JavaScript의 기초를 바탕으로 로그인 및 회원가입 페이지를 구현하며 
                웹 서비스의 기본적인 상호작용 구조를 학습하였습니다. React를 활용해 실제 서비스와 유사한 
                사용자 경험을 설계하는 과정에 집중하고 있습니다.</p>
      
      </div>
      <div className='card' style={{color: "white"}}>
            
            <h2>Contact</h2>
          
            <button onClick={handleClick}>{show ? '정보 닫기' : '번호 확인하기'}</button>
           {show&&( <div><p>연락처: <strong>010-3092-8991</strong></p>
            <p>이메일: <strong>9senro4i@sookmyung.ac.kr</strong></p>
            </div>)}
             </div>
        </div>

    );
}
export default  Profilen;