import { InfoCard } from '../Components';
import { IoImageOutline, IoLogInOutline, IoPeopleOutline } from "react-icons/io5";

function Projects() {
    return (
        <div className="page-container">
            <h2>최근 활동</h2>
            <InfoCard className="contact-project-box"
                icon={<IoLogInOutline />}
                title="로그인, 회원가입 페이지 제작" 
                content="회원가입, 로그인 등 웹 UI 감각을 익혔습니다." 
            />

            <InfoCard className="contact-project-box"
                icon={<IoImageOutline />} 
                title="자기소개 웹페이지 제작" 
                    content="동적인 웹 레이아웃과 정보 구조를 직접 구성하며 학습했습니다." 
            />
            

            <InfoCard className="contact-project-box"
                icon={<IoPeopleOutline />}
                title="스터디 및 팀 활동" 
                content="회원가입, 로그인 등 앱 UI 감각을 익혔습니다." 
            />
        </div>
    );
}

export default Projects;