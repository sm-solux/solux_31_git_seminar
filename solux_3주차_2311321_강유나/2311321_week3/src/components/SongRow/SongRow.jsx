import React, { useState } from "react";
import styles from "./SongRow.module.css";

export default function SongRow({ idx, title, artist, album, duration, emoji, color, img, onPlay }) {
    //                                                                                    ^^^^ 추가
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className={styles.row}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onPlay && onPlay({ title, artist, emoji, color })}
        >
            <div className={styles.left}>
                <div className={styles.idxWrap}>
                    {hovered ? <span className={styles.playIcon}>▶</span> : <span className={styles.idx}>{idx}</span>}
                </div>

                {/* 이미지 있으면 img, 없으면 그라디언트+이모지 */}
                <div className={styles.thumb}>
                    {img
                        ? <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        : <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, ${color}, #1a1a1a)`, display: "flex", alignItems: "center", justifyContent: "center" }}>{emoji}</div>
                    }
                </div>

                <div>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.artist}>{artist}</p>
                </div>
            </div>
            <p className={styles.album}>{album}</p>
            <p className={styles.duration}>{duration}</p>
        </div>
    );
}