import React, { useState } from "react";
import styles from "./Player.module.css";

export default function Player({ track, isPlaying, setIsPlaying }) {
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(70);
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.player}>
      <div className={styles.trackInfo}>
        <div className={styles.thumb} style={{ background: `linear-gradient(135deg, ${track.color}, #1a1a1a)` }}>
          {track.emoji}
        </div>
        <div className={styles.meta}>
          <p className={styles.title}>{track.title}</p>
          <p className={styles.artist}>{track.artist}</p>
        </div>
        <button className={`${styles.likeBtn} ${liked ? styles.liked : ""}`} onClick={() => setLiked(!liked)}>
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.btns}>
          <button className={styles.ctrlBtn} title="셔플">⇄</button>
          <button className={styles.ctrlBtn} title="이전">⏮</button>
          <button className={styles.playBtn} onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button className={styles.ctrlBtn} title="다음">⏭</button>
          <button className={styles.ctrlBtn} title="반복">↻</button>
        </div>
        <div className={styles.progressWrap}>
          <span className={styles.time}>{Math.floor(progress * 2.12 / 100)}:{String(Math.floor((progress * 2.12 / 100 % 1) * 60)).padStart(2,"0")}</span>
          <input
            type="range" min={0} max={100} value={progress}
            className={styles.progress}
            onChange={e => setProgress(Number(e.target.value))}
          />
          <span className={styles.time}>3:32</span>
        </div>
      </div>

      <div className={styles.extra}>
        <button className={styles.ctrlBtn} title="가사">📄</button>
        <button className={styles.ctrlBtn} title="대기열">☰</button>
        <span className={styles.volIcon}>🔊</span>
        <input
          type="range" min={0} max={100} value={volume}
          className={styles.volume}
          onChange={e => setVolume(Number(e.target.value))}
        />
        <button className={styles.ctrlBtn} title="전체화면">⛶</button>
      </div>
    </div>
  );
}
