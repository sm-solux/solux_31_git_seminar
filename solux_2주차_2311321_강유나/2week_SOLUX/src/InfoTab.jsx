import styles from "./InfoTab.module.css";

const data = {
    name: "강유나",
    department: "인공지능공학부",
    experiences: [
        { year: "2026", desc: "⭐솔룩스 임원진⭐" },
        { year: "2024", desc: "교내 오픈소스프로그래밍 프로젝트 진행" },
        { year: "2023", desc: "인공지능 입문 강의 수강" },
    ],
};

function Card({ title, children }) {
    return (
        <div className={styles.card}>
            {title && <div className={styles.cardTitle}>{title}</div>}
            {children}
        </div>
    );
}

export default function InfoTab() {
    return (
        <>
            <Card title="기본 정보">
                {[
                    ["이름", data.name],
                    ["학과", data.department],
                    ["관심 분야", "그래픽, AI, 게임"],
                    ["위치", "지구"],
                ].map(([label, value]) => (
                    <div key={label} className={styles.infoRow}>
                        <span className={styles.infoLabel}>{label}</span>
                        <span className={styles.infoValue}>{value}</span>
                    </div>
                ))}
            </Card>
            <Card title="활동 / 경험">
                {data.experiences.map((e, i) => (
                    <div key={i} className={styles.infoRow}>
                        <span className={styles.infoLabel}>{e.year}</span>
                        <span className={styles.infoValue}>{e.desc}</span>
                    </div>
                ))}
            </Card>
        </>
    );
}
