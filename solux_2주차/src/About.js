import React from 'react';
function About(){
    return(
     <div>
            <div className="card">
                <h2 style={{ marginBottom: '20px', color: 'white' }}>김서연</h2>
                <p><strong>전공/복수전공:</strong> 수학과, 컴퓨터과학전공</p>
                <p><strong>관심 분야:</strong> 프론트엔드 기초, 웹/앱 ,백엔드 기초</p>
                <p><strong>MBTI:</strong> ISTP </p>
                <p><strong>키워드:</strong> #결과중심, #명확한_커뮤니케이션 </p>
                <hr style={{ margin: '20px 0', border: '0.5px solid #eee' }} />
                <p>탄탄한 기본기를 바탕으로 결함 없는 UI 구현을 목표로 합니다.</p>
            </div>
           < div className="card">
                <h2>About Me</h2>
        <p>안녕하세요! 이번 학기 <strong>SOLUX</strong>의 일원이 되어 함께 성장할 수 있게 되어 진심으로 영광입니다.
        지금까지는 주로 실전 경험보다는 이론을 중심으로 공부를 해왔습니다. 이번학기에는 이제 웹 프론트엔드 파트 팀원으로 참여하게 되었는데, React를 활용한 웹 프론트엔드 기초를 다질 수 있는 경험을 쌓게 되어 행복합니다.</p>
        
        <p>앞으로 Flutter등을 학습하여 모바일 앱 프론트엔드로 경험을 확장하고, 나아가 백엔드 시스템까지 섭렵하여 데이터의 흐름을 완전히 장악하는 <strong>풀스택을 다룰 수 있는 개발자</strong>로 거듭나는 것이 저의 목표입니다.</p>
            </div>
            </div>
    
    );
    
    
}



export default About;