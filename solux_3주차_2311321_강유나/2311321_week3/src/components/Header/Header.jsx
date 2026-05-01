import React, { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className={styles.header}>
      <div className={styles.searchWrap}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          className={styles.input}
          type="text"
          placeholder="노래, 앨범, 아티스트 검색"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {query && <button className={styles.clear} onClick={() => setQuery("")}>✕</button>}
      </div>
      <div className={styles.actions}>
        <button className={styles.avatar}>YN</button>
      </div>
    </header>
  );
}
