import styles from "./ContactTab.module.css";

const data = {
    contact: {
        email: "kyn824@sookmyung.ac.kr",
        github: "https://github.com/Yuna-K8",
        linkedin: "not yet",
    },
};

const items = [
    { icon: "✉", label: "이메일", content: data.contact.email, isLink: true },
    { icon: "G", label: "GitHub", content: data.contact.github, isLink: true },
    { icon: "L", label: "LinkedIn", content: data.contact.linkedin},
];

export default function ContactTab() {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>연락처</div>
            {items.map((item, i) => (
                <div key={i} className={styles.contactRow}>
                    <div className={styles.contactIcon}>{item.icon}</div>
                    <div>
                        <div className={styles.contactLabel}>{item.label}</div>
                        {item.isLink ? (
                            <a href={`https://${item.content}`} className={styles.contactLink}>
                                {item.content}
                            </a>
                        ) : (
                            <div className={styles.contactValue}>{item.content}</div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
