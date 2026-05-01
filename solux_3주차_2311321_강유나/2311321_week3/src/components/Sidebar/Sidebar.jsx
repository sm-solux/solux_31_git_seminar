import React from "react";
import styles from "./Sidebar.module.css";

const NAV = [
  { id: "home",    icon: "🏠", label: "홈" },
  { id: "explore", icon: "🔍", label: "탐색" },
  { id: "library", icon: "📚", label: "보관함" },
];

export default function Sidebar({ page, setPage }) {
  return (
      <aside className={styles.sidebar}>
          <div className={styles.logo} onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
        <span className={styles.logoIcon}>♬</span>
        <div>
          <div className={styles.logoMain}>MeTube</div>
          <div className={styles.logoSub}>Music</div>
        </div>
      </div>
      <nav className={styles.nav}>
        {NAV.map(n => (
          <button
            key={n.id}
            className={`${styles.navItem} ${page === n.id ? styles.active : ""}`}
            onClick={() => setPage(n.id)}
          >
            <span className={styles.navIcon}>{n.icon}</span>
            <span>{n.label}</span>
          </button>
        ))}
      </nav>
      <div className={styles.divider} />
      <div className={styles.section}>
        <p className={styles.sectionTitle}>최근 재생</p>
        {["NCT WISH", "Hearts2Hearts", "Aikatsu!"].map((t, i) => (
          <div key={i} className={styles.recentItem}>
            <div className={styles.recentThumb} style={{ background: ["#c0392b","#8e44ad","#2980b9","#27ae60"][i] }}>♪</div>
            <span className={styles.recentTitle}>{t}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
