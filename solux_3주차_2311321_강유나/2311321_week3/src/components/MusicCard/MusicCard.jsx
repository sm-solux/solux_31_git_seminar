import React, { useState } from "react";
import styles from "./MusicCard.module.css";

export default function MusicCard({ title, sub, emoji, color, onPlay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPlay && onPlay({ title, artist: sub, emoji, color })}
    >
      <div className={styles.thumb} style={{ background: `linear-gradient(135deg, ${color}, #1a1a1a)` }}>
        <span className={styles.emoji}>{emoji}</span>
        {hovered && <button className={styles.playOverlay}>▶</button>}
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.sub}>{sub}</p>
    </div>
  );
}
