import { useState } from "react";
import AboutTab from "./AboutTab";
import InfoTab from "./InfoTab";
import ProjectsTab from "./ProjectsTab";
import ContactTab from "./ContactTab";
import "./Portfolio.css";

const TABS = ["소개", "기본 정보", "프로젝트", "연락처"];

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState(0);

    const tabContent = [<AboutTab />, <InfoTab />, <ProjectsTab />, <ContactTab />];

    return (
        <div className="portfolio-wrapper">
            <div className="portfolio-page">

                <div className="portfolio-hero">
                    <img
                        src="/profile.jpg"
                        alt="프로필"
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            objectFit: "cover",
                            flexShrink: 0,
                        }}
                    />
                    <div>
                        <div className="portfolio-hero-name">강유나</div>
                        <div className="portfolio-hero-tagline">
                        숙명여자대학교 인공지능공학부에 재학 중인 강유나입니다. 
                        </div>
                        <span className="portfolio-badge">인공지능공학부</span>
                        <span className="portfolio-badge">그래픽스</span>
                        <span className="portfolio-badge">테일즈런너</span>
                    </div>
                </div>

                <nav className="portfolio-nav">
                    {TABS.map((tab, i) => (
                        <button
                            key={tab}
                            className={`portfolio-nav-btn${activeTab === i ? " active" : ""}`}
                            onClick={() => setActiveTab(i)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>

                {tabContent[activeTab]}
            </div>
        </div>
    );
}
