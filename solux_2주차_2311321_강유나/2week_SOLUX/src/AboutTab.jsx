import styles from "./AboutTab.module.css";

const data = {
    about: `안녕하세요. 인공지능공학부에 재학 중인 강유나입니다.`,
    interests: ["그래픽 디자인", "인공지능", "컴퓨터 그래픽스"],
    skills: ["Python", "C", "Java", "React", "Figma", "3DS MAX", "Revit", "Rhino"],
};

function Card({ title, children }) {
    return (
        <div className={styles.card}>
            {title && <div className={styles.cardTitle}>{title}</div>}
            {children}
        </div>
    );
}

export default function AboutTab() {
    return (
        <>
            <Card title="About Me">
                <p className={styles.aboutText}>{data.about}</p>
            </Card>
            <div className={styles.twoCol}>
                <Card title="관심 분야">
                    <div className={styles.skillGrid}>
                        {data.interests.map((s) => (
                            <span key={s} className={styles.skillChip}>{s}</span>
                        ))}
                    </div>
                </Card>
                <Card title="기술 스택">
                    <div className={styles.skillGrid}>
                        {data.skills.map((s) => (
                            <span key={s} className={styles.skillChip}>{s}</span>
                        ))}
                    </div>
                </Card>
            </div>
        </>
    );
}
