import React, { useState } from "react";
import SongRow from "../../components/SongRow/SongRow";
import styles from "./LibraryPage.module.css";

const TABS = ["재생목록", "앨범", "아티스트", "노래"];

const PLAYLISTS = [
  { title: "좋아요 표시한 음악",  count: 26, emoji: "❤️",  color: "#e74c3c" },
  { title: "Animation OST",       count: 601,  emoji: "💤",  color: "#2c3e50" },
  { title: "운동 플리",           count: 1,  emoji: "💪",  color: "#e67e22" },
  { title: "공부할 때",           count: 3,  emoji: "📚",  color: "#3498db" },
  { title: "K-POP 최애",          count: 267,  emoji: "🎤",  color: "#9b59b6" },
  { title: "감성 음악",           count: 17,  emoji: "🌿",  color: "#27ae60" },
];

const SONGS = [
    { title: "THAT'S A NO NO", artist: "ITZY", album: "IT'z ME", duration: "3:01", img: "/images/thats_nono.jpg" },
    { title: "RUDE", artist: "Hearts2Hearts", album: "RUDE!", duration: "3:20", img: "/images/RUDE.jpg" },
    { title: "404(New Era)", artist: "KiiKii(키키)", album: "Delulu Pack", duration: "3:00", img: "/images/404.jpg" },
    { title: "BANG BANG", artist: "IVE (아이브)", album: "REVIVE+", duration: "2:59", img: "/images/REVIVE.jpg" },
    { title: "캐치 캐치", artist: "YENA (최예나)", album: "LOVE CATCHER", duration: "3:00", img: "/images/catchcatch.jpg" },
    { title: "Dream Goes On", artist: "Aira Harune(CV.Kana Asumi)", album: "プリティーリズム・オーロラドリーム ライブチック・キャラクターソングCD act.1 Dream Goes On", duration: "3:30", img: "/images/AIRA.jpg" },
    { title: "ココロ充電!", artist: "Rhythm Amamiya(CV.Sayuri Hara)", album: "プリティーリズム・オーロラドリーム ライブチック・キャラクターソングCD act.2 ココロ充電!", duration: "3:44", img: "/images/rizumu.jpg" },
    { title: "残響散歌 - Zankyosanka", artist: "Aimer", album: "Open a Door", duration: "3:05", img: "/images/zankyo.jpg" },
    { title: "セレナーデ - Serenade", artist: "natori", album: "The Anyss", duration: "3:40", img: "/images/serenade.jpg" },
    { title: "光るなら (Cover)", artist: "Poppin'Party", album: "バンドリ！ ガールズバンドパーティ！ カバーコレクションVol.1", duration: "4:14", img: "/images/hikarunara.jpg" },

];


export default function LibraryPage({ onPlay }) {
  const [tab, setTab] = useState("재생목록");

  return (
    <div className={styles.page}>
      <div className={styles.tabs}>
        {TABS.map(t => (
          <button key={t} className={`${styles.tab} ${tab === t ? styles.active : ""}`} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>

      {tab === "재생목록" && (
        <div className={styles.plGrid}>
          {PLAYLISTS.map((pl, i) => (
            <div key={i} className={styles.plCard} onClick={() => onPlay({ title: pl.title, artist: `${pl.count}곡`, emoji: pl.emoji, color: pl.color })}>
              <div className={styles.plThumb} style={{ background: `linear-gradient(135deg, ${pl.color}, #1a1a1a)` }}>
                <span>{pl.emoji}</span>
              </div>
              <p className={styles.plTitle}>{pl.title}</p>
              <p className={styles.plCount}>재생목록 · {pl.count}곡</p>
            </div>
          ))}
        </div>
      )}

      {tab === "노래" && (
              <div className={styles.songList}>
          {SONGS.map((s, i) => (
            <SongRow key={i} idx={i + 1} {...s} onPlay={onPlay} />
          ))}
        </div>
      )}

            {tab === "앨범" && (
                <div className={styles.empty}>
                    <p className={styles.emptyIcon}>💿</p>
                    <p>앨범이 여기에 표시됩니다</p>
                    <p className={styles.emptySub}>음악을 저장하면 보관함에 추가됩니다</p>
                </div>
            )}

            {tab === "아티스트" && (
                <div className={styles.empty}>
                    <p className={styles.emptyIcon}>👤</p>
                    <p>아티스트이 여기에 표시됩니다</p>
                    <p className={styles.emptySub}>음악을 저장하면 보관함에 추가됩니다</p>
                </div>
            )}
        </div>
    );
}

