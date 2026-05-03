import { InfoCard, SkillCard } from '../Components';
import { IoBookOutline } from "react-icons/io5";

function Skills() {
    return (
        <div className="page-container">
            <h2>배우고 있는 기술</h2>

            <SkillCard 
                title="React"
                percentage={60}
                color="#f788f0"
            />

            <SkillCard 
                title="JavaScript"
                percentage={50}
                color="#6e56cf"
            />

            <SkillCard 
                title="HTML/CSS"
                percentage={80}
                color="#a2bea6"
            />

            <SkillCard 
                title="Flutter"
                percentage={0}
                color="#ffb300"
            />

            <InfoCard className="learn-box"
                icon={<IoBookOutline />}
                title="학습 스타일"
                detail={`• 배운 내용을 바로 UI로 구현해보며 익히는 편
• 기록하며 공부하는 습관이 있음
• 완벽보다 완성을 먼저 경험하려고 노력함
• 영상을 통해 원리를 파악하는 것을 선호`}
            />

        </div>
    )
}

export default Skills;