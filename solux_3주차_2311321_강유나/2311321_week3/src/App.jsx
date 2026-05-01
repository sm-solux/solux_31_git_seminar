import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import Player from "./components/Player/Player";
import styles from "./App.module.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [currentTrack, setCurrentTrack] = useState({
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    emoji: "🌃",
    color: "#c0392b",
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const pages = { home: <HomePage onPlay={setCurrentTrack} />, explore: <ExplorePage />, library: <LibraryPage onPlay={setCurrentTrack} /> };

  return (
    <div className={styles.app}>
      <Sidebar page={page} setPage={setPage} />
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>{pages[page]}</div>
      </div>
      <Player track={currentTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}
