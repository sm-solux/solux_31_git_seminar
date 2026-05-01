import React from "react";
import MusicCard from "../../components/MusicCard/MusicCard";
import SongRow from "../../components/SongRow/SongRow";
import styles from "./HomePage.module.css";

const QUICK = [
    { title: "Night Driving", emoji: "🌃", color: "#2e1e42" },
    { title: "School", emoji: "🏫", color: "#ffd08f" },
    { title: "LOVE", emoji: "♥️", color: "#ffbde9" },
    { title: "Ocean", emoji: "🌊", color: "#77b8ff" },
    { title: "Working", emoji: "🏢", color: "#2c3947" },
    { title: "Spring", emoji: "🌸", color: "#e91e63" },
];

const MIX = [
    {
        title: "팝 믹스", sub: "Ariana Grande, Dua Lipa 외",  emoji: "🎵", color: "#ff6b35" },
  { title: "K-POP 믹스",  sub: "NCT WISH, aespa 외",        emoji: "🎤", color: "#9b59b6" },
  { title: "새벽 감성",    sub: "로파이 & 인디",         emoji: "🌙", color: "#2c3e50" },
  { title: "운동 플리",    sub: "에너지 넘치는 선곡",    emoji: "💪", color: "#e74c3c" },
  { title: "Chill 모음",  sub: "잔잔한 분위기",         emoji: "🌿", color: "#16a085" },
];

const TRENDING = [
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

export default function HomePage({ onPlay }) {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>회원님을 위한 추천</h2>
        <div className={styles.quickGrid}>
          {QUICK.map((item, i) => (
            <div key={i} className={styles.quickItem} onClick={() => onPlay(item)}>
              <div className={styles.quickThumb} style={{ background: `linear-gradient(135deg, ${item.color}, #1a1a1a)` }}>
                {item.emoji}
              </div>
              <span className={styles.quickTitle}>{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>나를 위한 믹스</h2>
        <div className={styles.cardGrid}>
          {MIX.map((item, i) => (
            <MusicCard key={i} {...item} onPlay={onPlay} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
              <h2 className={styles.sectionTitle}>🔥 지금 인기 차트 🔥</h2>
        <div className={styles.songList}>
                  <div className={styles.songHeader}>
                      <span>#</span>
                      <span></span>
            <span>             제목</span>
            <span>앨범</span>
            <span>⏱</span>
          </div>
          {TRENDING.map((t, i) => (
            <SongRow key={i} idx={i + 1} {...t} onPlay={onPlay} />
          ))}
        </div>
      </section>
    </div>
  );
}
