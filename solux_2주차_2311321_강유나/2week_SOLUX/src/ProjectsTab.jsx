import styles from "./ProjectsTab.module.css";

const data = {
    projects: [
        {
            title: "AI를 활용한 분리수거 프로그램",
            desc: "오픈소스 이용하여 진행",
            tags: ["Python", "google colab"],
        },
    ],
};

export default function ProjectsTab() {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>프로젝트 경험</div>
            {data.projects.map((p, i) => (
                <div key={i} className={styles.projectCard}>
                    <div className={styles.projectTitle}>{p.title}</div>
                    <div className={styles.projectDesc}>{p.desc}</div>
                    <div className={styles.tagList}>
                        {p.tags.map((t) => (
                            <span key={t} className={styles.badge}>{t}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
