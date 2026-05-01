import React from "react";
import styles from "./ExplorePage.module.css";

const GENRES = [
  { label: "팝",        emoji: "🎵", color: "#e74c3c" },
  { label: "K-POP",    emoji: "🎤", color: "#9b59b6" },
  { label: "힙합",      emoji: "🎧", color: "#f39c12" },
  { label: "R&B / 소울", emoji: "🎷", color: "#16a085" },
  { label: "록",        emoji: "🎸", color: "#c0392b" },
  { label: "재즈",      emoji: "🎺", color: "#2980b9" },
  { label: "클래식",    emoji: "🎻", color: "#8e44ad" },
  { label: "Electronic", emoji: "🎹", color: "#1abc9c" },
  { label: "로파이",    emoji: "🌙", color: "#2c3e50" },
  { label: "인디",      emoji: "🌿", color: "#27ae60" },
  { label: "댄스",      emoji: "💃", color: "#e91e63" },
  { label: "OST",       emoji: "🎬", color: "#d35400" },
];

const MOODS = [
  { label: "집중",   emoji: "🎯", color: "#2980b9" },
  { label: "운동",   emoji: "💪", color: "#e74c3c" },
  { label: "수면",   emoji: "😴", color: "#34495e" },
  { label: "파티",   emoji: "🎉", color: "#f39c12" },
  { label: "드라이브",emoji: "🚗", color: "#16a085" },
  { label: "로맨틱", emoji: "💕", color: "#e91e63" },
];

export default function ExplorePage() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>장르</h2>
        <div className={styles.grid}>
          {GENRES.map((g, i) => (
            <div key={i} className={styles.genreCard} style={{ background: `linear-gradient(135deg, ${g.color}, #1a1a1a)` }}>
              <span className={styles.emoji}>{g.emoji}</span>
              <span className={styles.label}>{g.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>분위기 & 활동</h2>
        <div className={styles.moodGrid}>
          {MOODS.map((m, i) => (
            <div key={i} className={styles.moodCard} style={{ background: `linear-gradient(135deg, ${m.color}44, ${m.color}22)`, border: `1px solid ${m.color}55` }}>
              <span className={styles.moodEmoji}>{m.emoji}</span>
              <span className={styles.moodLabel}>{m.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
