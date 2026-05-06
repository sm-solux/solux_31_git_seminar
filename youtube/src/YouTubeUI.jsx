import { useState, useRef, useEffect, useCallback } from "react";

// ── 데이터 ──────────────────────────────────────────────
const VIDEOS = [
  { id: 0, title: "솔룩스 소개", ch: "Solux", chInitials: "S", chColor: "#378ADD", chSubs: "구독자 12.4만명", views: "조회수 24만회", ago: "3주일 전", dur: "10:00", bg: "#378ADD", desc: "솔룩스를 소개합니다." },
  { id: 1, title: "집에선 방구석 폐인, 학교에선 인기 송?", ch: "눈송이", chInitials: "NS", chColor: "#1683ff", chSubs: "구독자 9.4만명", views: "조회수 1906만회", ago: "3주일 전", dur: "19:06", bg: "#1683ff", desc: "내가 이곳에서는 인기만점이라구?!" },
  { id: 2, title: "리액트 마스터", ch: "코딩마스터", chInitials: "R", chColor: "#9b92ff", chSubs: "구독자 22.8만명", views: "조회수 1회", ago: "2주일 전", dur: "35:00", bg: "#9b92ff", desc: "리액트를 마스터 하고싶으신기요?" },
  { id: 3, title: "A받+는 받는 주파수", ch: "학교일짱", chInitials: "S1", chColor: "#89db25", chSubs: "구독자 8.7만명", views: "조회수 777만회", ago: "1주일 전", dur: "77:77", bg: "#89db25", desc: "A+을 받고싶은 당신! 교수의 뇌를 \'해킹\'하라!!" },
  { id: 4, title: "벌써 중간고사?!", ch: "말도안돼", chInitials: "OMG", chColor: "#ff0000", chSubs: "구독자 31.2만명", views: "조회수 0회", ago: "1초 전", dur: "80:80", bg: "#ff0000", desc: "중간...이 뭐죠?" },
  { id: 5, title: "교수님 종강해요", ch: "아이고정강이야", chInitials: "K", chColor: "#ff78a5", chSubs: "구독자 5.1만명", views: "조회수 9999만회", ago: "1일 전", dur: "11:11", bg: "#ff78a5", desc: "종강하는 방법 1타 강사" },
];

const SHORTS = [
  { title: "솔룩스 간단 정리", ch: "Solux", bg: "#378ADD", dur: "0:45" },
  { title: "A받+는 방법", ch: "학교일짱", bg: "#89db25", dur: "0:55" },
  { title: "중간고사 이겨내기", ch: "말도안돼", bg: "#ff0000", dur: "1:00" },
  { title: "교수님 종강 아세요?", ch: "아이고정강이야", bg: "#ff78a5", dur: "0:55" },
  { title: "리액트 간단 정리", ch: "코딩마스터", bg: "#9b92ff", dur: "0:55" },
  { title: "송이의 하루", ch: "눈송이", bg: "#1683ff", dur: "0:55" },
];

const BASE_COMMENTS = [
  { id: 1, name: "홍길동", initials: "HO", color: "#a28618", ago: "2일 전", text: "이야~ 이거 정말 도움됩니다.", likes: 234 },
  { id: 2, name: "홍길은", initials: "HO", color: "#a3a3a3", ago: "1일 전", text: "구독", likes: 87 },
  { id: 3, name: "홍길금", initials: "HO", color: "#ffff38", ago: "5시간 전", text: "구독하고갑니다.", likes: 12 },
  { id: 4, name: "황길동", initials: "HW", color: "#f5c126", ago: "3시간 전", text: "잘 봤습니다.", likes: 56 },
];

const SUB_CHANNELS = [
  { c: "Solux", i: "S", col: "#378ADD", s: "구독자 12.4만명" },
  { c: "눈송이", i: "NS", col: "#1683ff", s: "구독자 8.7만명" },
  { c: "코딩마스터", i: "R", col: "#9b92ff", s: "구독자 31.2만명" },
];

const CHIPS = ["전체", "React", "Solux", "송이", "종강", "중간고사"];

// ── 파서 / 포매터 ────────────────────────────────────────
function parseDur(s) {
  const [m, sec] = s.split(":").map(Number);
  return m * 60 + sec;
}
function fmtTime(t) {
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
}

// ── 아이콘 ───────────────────────────────────────────────
const icons = {
  home: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>,
  shorts: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="m10 8 6 4-6 4V8z" fill="currentColor" stroke="none" /></svg>,
  subs: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  history: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  playlist: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>,
  mic: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /></svg>,
  bell: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
  search: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
  back: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>,
  play: <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>,
  pause: <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>,
  next: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="5 4 15 12 5 20 5 4" /><line x1="19" y1="5" x2="19" y2="19" /></svg>,
  vol: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>,
  fullscreen: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" /></svg>,
  like: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" /><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>,
  dislike: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z" /><path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" /></svg>,
  share: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>,
  save: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
  thumbUp: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" /><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>,
  thumbDown: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z" /></svg>,
};

// ── 스타일 ───────────────────────────────────────────────
const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
  .yt-app { display: flex; flex-direction: column; min-height: 100vh; background: #f9f9f9; color: #0f0f0f; font-size: 14px; }
  .yt-header { display: flex; align-items: center; justify-content: space-between; padding: 0 16px; height: 52px; background: #fff; border-bottom: 1px solid #e5e5e5; position: sticky; top: 0; z-index: 50; }
  .yt-logo { display: flex; align-items: center; gap: 6px; font-size: 17px; font-weight: 700; cursor: pointer; color: #0f0f0f; background: none; border: none; }
  .logo-icon { width: 28px; height: 20px; background: #E24B4A; border-radius: 5px; display: flex; align-items: center; justify-content: center; }
  .logo-icon svg { width: 12px; height: 12px; fill: white; }
  .search-wrap { display: flex; flex: 1; max-width: 480px; margin: 0 24px; }
  .search-wrap input { flex: 1; height: 34px; padding: 0 14px; border: 1px solid #ccc; border-right: none; border-radius: 17px 0 0 17px; background: #f8f8f8; color: #0f0f0f; font-size: 13px; outline: none; }
  .search-wrap input:focus { border-color: #888; background: #fff; }
  .search-wrap button { width: 52px; height: 34px; border: 1px solid #ccc; border-left: none; border-radius: 0 17px 17px 0; background: #f8f8f8; cursor: pointer; color: #606060; display: flex; align-items: center; justify-content: center; }
  .hdr-right { display: flex; align-items: center; gap: 12px; }
  .icon-btn { width: 34px; height: 34px; border: none; background: none; cursor: pointer; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #606060; }
  .icon-btn:hover { background: #f2f2f2; }
  .avatar { width: 30px; height: 30px; border-radius: 50%; background: #48e540; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: #fff; cursor: pointer; }
  .yt-body { display: flex; flex: 1; }
  .sidebar { width: 220px; background: #fff; padding: 8px 0; flex-shrink: 0; border-right: 1px solid #e5e5e5; }
  .nav-item { display: flex; align-items: center; gap: 14px; padding: 0 20px; height: 40px; font-size: 13px; cursor: pointer; border-radius: 8px; margin: 1px 8px; color: #0f0f0f; border: none; background: none; width: calc(100% - 16px); text-align: left; }
  .nav-item:hover, .nav-item.active { background: #f2f2f2; }
  .nav-item.active { font-weight: 700; }
  .nav-divider { height: 1px; background: #e5e5e5; margin: 6px 0; }
  .nav-section { padding: 8px 20px 4px; font-size: 11px; font-weight: 700; color: #606060; text-transform: uppercase; letter-spacing: .5px; }
  .sub-icon { width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; color: #fff; }
  .main { flex: 1; overflow: auto; }
  .chip-bar { display: flex; gap: 8px; padding: 14px 20px 0; overflow-x: auto; scrollbar-width: none; }
  .chip-bar::-webkit-scrollbar { display: none; }
  .chip { padding: 6px 13px; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; white-space: nowrap; border: none; }
  .chip.active { background: #0f0f0f; color: #fff; }
  .chip:not(.active) { background: #f2f2f2; color: #0f0f0f; }
  .chip:not(.active):hover { background: #e5e5e5; }
  .video-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px 12px; padding: 14px 20px 24px; }
  .vcard { cursor: pointer; }
  .vcard:hover .vthumb { opacity: .85; }
  .vthumb { width: 100%; aspect-ratio: 16/9; border-radius: 10px; overflow: hidden; position: relative; margin-bottom: 9px; transition: opacity .15s; }
  .vdur { position: absolute; bottom: 5px; right: 5px; background: rgba(0,0,0,.85); color: #fff; font-size: 11px; padding: 2px 5px; border-radius: 3px; }
  .vinfo { display: flex; gap: 10px; }
  .ch-icon { border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #fff; }
  .vmeta { flex: 1; min-width: 0; }
  .vtitle { font-size: 13px; font-weight: 700; line-height: 1.4; margin-bottom: 3px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .vch { font-size: 12px; color: #606060; margin-bottom: 1px; }
  .vstats { font-size: 12px; color: #606060; }
  .shorts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(155px, 1fr)); gap: 12px; padding: 16px 20px 24px; }
  .short-card { cursor: pointer; }
  .short-thumb { width: 100%; aspect-ratio: 9/16; border-radius: 10px; position: relative; margin-bottom: 8px; }
  .short-title { font-size: 13px; font-weight: 700; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .short-ch { font-size: 12px; color: #606060; margin-top: 3px; }
  .history-item { display: flex; gap: 14px; margin-bottom: 16px; cursor: pointer; }
  .history-item:hover .hthumb { opacity: .85; }
  .hthumb { aspect-ratio: 16/9; border-radius: 10px; flex-shrink: 0; position: relative; transition: opacity .15s; }
  .htitle { font-size: 14px; font-weight: 700; line-height: 1.4; margin-bottom: 5px; }
  .hch { font-size: 13px; color: #606060; margin-bottom: 2px; }
  .hstats { font-size: 12px; color: #606060; }
  .watch-layout { display: flex; gap: 20px; padding: 20px 24px; align-items: flex-start; }
  .watch-main { flex: 1; min-width: 0; }
  .watch-side { width: 360px; flex-shrink: 0; }
  .player { width: 100%; aspect-ratio: 16/9; border-radius: 10px; overflow: hidden; position: relative; background: #111; margin-bottom: 14px; cursor: pointer; }
  .play-btn-overlay { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 60px; height: 60px; border-radius: 50%; background: rgba(0,0,0,.6); display: flex; align-items: center; justify-content: center; pointer-events: none; }
  .player-bar { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,.7)); padding: 16px 12px 10px; }
  .progress-track { height: 4px; background: rgba(255,255,255,.3); border-radius: 2px; margin-bottom: 10px; cursor: pointer; }
  .progress-fill { height: 100%; background: #E24B4A; border-radius: 2px; position: relative; transition: width .2s linear; }
  .progress-fill::after { content: ''; position: absolute; right: -5px; top: -3px; width: 10px; height: 10px; border-radius: 50%; background: #E24B4A; }
  .player-controls { display: flex; align-items: center; gap: 12px; }
  .pctrl-btn { background: none; border: none; cursor: pointer; color: #fff; display: flex; align-items: center; padding: 0; }
  .time-text { font-size: 12px; color: #fff; margin-left: 4px; white-space: nowrap; }
  .fullscreen-btn { margin-left: auto; }
  .watch-title { font-size: 18px; font-weight: 700; line-height: 1.4; margin-bottom: 10px; }
  .watch-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 8px; }
  .watch-stats { font-size: 13px; color: #606060; }
  .action-btns { display: flex; gap: 8px; flex-wrap: wrap; }
  .action-btn { display: flex; align-items: center; gap: 6px; padding: 7px 14px; border-radius: 20px; border: 1px solid #ccc; background: #f2f2f2; cursor: pointer; font-size: 13px; font-weight: 700; color: #0f0f0f; }
  .action-btn:hover { background: #e5e5e5; }
  .action-btn.liked { background: #e8f0fe; color: #1a73e8; border-color: #1a73e8; }
  .ch-row { display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-top: 1px solid #e5e5e5; border-bottom: 1px solid #e5e5e5; margin-bottom: 16px; }
  .ch-row-left { display: flex; align-items: center; gap: 12px; }
  .ch-info-name { font-size: 14px; font-weight: 700; }
  .ch-info-subs { font-size: 12px; color: #606060; }
  .sub-btn { padding: 7px 16px; border-radius: 20px; background: #0f0f0f; color: #fff; border: none; cursor: pointer; font-size: 13px; font-weight: 700; }
  .sub-btn:hover { background: #333; }
  .sub-btn.subscribed { background: #f2f2f2; color: #0f0f0f; border: 1px solid #ccc; }
  .desc-box { background: #f2f2f2; border-radius: 10px; padding: 12px 14px; margin-bottom: 20px; cursor: pointer; }
  .desc-text { font-size: 13px; line-height: 1.6; }
  .desc-text.collapsed { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .desc-more { font-size: 13px; font-weight: 700; margin-top: 6px; cursor: pointer; }
  .comments-header { font-size: 15px; font-weight: 700; margin-bottom: 14px; }
  .comment-input-row { display: flex; gap: 10px; margin-bottom: 20px; align-items: flex-start; }
  .comment-avatar { width: 32px; height: 32px; border-radius: 50%; background: #48e540; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: #fff; }
  .comment-input-wrap { flex: 1; }
  .comment-input { width: 100%; border: none; border-bottom: 1px solid #ccc; background: transparent; font-size: 13px; padding: 6px 0; outline: none; color: #0f0f0f; }
  .comment-input:focus { border-bottom-color: #0f0f0f; }
  .comment-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 8px; }
  .cancel-btn { padding: 6px 14px; border-radius: 20px; border: none; background: none; cursor: pointer; font-size: 13px; color: #606060; }
  .cancel-btn:hover { background: #f2f2f2; }
  .submit-btn { padding: 6px 14px; border-radius: 20px; border: none; background: #0f0f0f; color: #fff; cursor: pointer; font-size: 13px; font-weight: 700; }
  .comment-item { display: flex; gap: 10px; margin-bottom: 18px; }
  .cmt-body-name { font-size: 12px; color: #606060; margin-bottom: 3px; }
  .cmt-text { font-size: 13px; line-height: 1.5; margin-bottom: 5px; }
  .cmt-actions { display: flex; gap: 12px; align-items: center; }
  .cmt-act-btn { background: none; border: none; cursor: pointer; font-size: 12px; color: #606060; display: flex; align-items: center; gap: 4px; padding: 0; }
  .cmt-act-btn:hover { color: #0f0f0f; }
  .side-title { font-size: 14px; font-weight: 700; margin-bottom: 12px; }
  .rec-card { display: flex; gap: 8px; margin-bottom: 10px; cursor: pointer; }
  .rec-card:hover .rec-thumb { opacity: .85; }
  .rec-thumb { min-width: 168px; width: 168px; aspect-ratio: 16/9; border-radius: 8px; position: relative; transition: opacity .15s; }
  .rec-dur { position: absolute; bottom: 4px; right: 4px; background: rgba(0,0,0,.85); color: #fff; font-size: 10px; padding: 1px 4px; border-radius: 3px; }
  .rec-meta { flex: 1; min-width: 0; }
  .rec-title { font-size: 13px; font-weight: 700; line-height: 1.35; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 3px; }
  .rec-ch { font-size: 11px; color: #606060; margin-bottom: 1px; }
  .rec-stats { font-size: 11px; color: #606060; }
  .back-btn { display: flex; align-items: center; gap: 6px; background: none; border: none; cursor: pointer; font-size: 13px; color: #606060; padding: 0; margin-bottom: 16px; }
  .back-btn:hover { color: #0f0f0f; }
  .sub-section-title { font-size: 16px; font-weight: 700; margin-bottom: 14px; }
  .sub-channel-row { display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e5e5e5; }
`;

// ── 서브 컴포넌트들 ──────────────────────────────────────

function VideoCard({ video, onWatch }) {
  return (
    <div className="vcard" onClick={() => onWatch(video.id)}>
      <div className="vthumb" style={{ background: video.bg }}>
        <span className="vdur">{video.dur}</span>
      </div>
      <div className="vinfo">
        <div className="ch-icon" style={{ width: 34, height: 34, fontSize: 11, background: video.chColor, marginTop: 2 }}>
          {video.chInitials}
        </div>
        <div className="vmeta">
          <div className="vtitle">{video.title}</div>
          <div className="vch">{video.ch}</div>
          <div className="vstats">{video.views} · {video.ago}</div>
        </div>
      </div>
    </div>
  );
}

function RecCard({ video, onWatch }) {
  return (
    <div className="rec-card" onClick={() => onWatch(video.id)}>
      <div className="rec-thumb" style={{ background: video.bg }}>
        <span className="rec-dur">{video.dur}</span>
      </div>
      <div className="rec-meta">
        <div className="rec-title">{video.title}</div>
        <div className="rec-ch">{video.ch}</div>
        <div className="rec-stats">{video.views}</div>
      </div>
    </div>
  );
}

// ── Player 컴포넌트 ──────────────────────────────────────
function Player({ video }) {
  const [playing, setPlaying] = useState(false);
  const [prog, setProg] = useState(0);
  const timerRef = useRef(null);
  const total = parseDur(video.dur);

  const stopTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  useEffect(() => {
    setPlaying(false); setProg(0); stopTimer();
    return stopTimer;
  }, [video.id, stopTimer]);

  const togglePlay = useCallback(() => {
    setPlaying(prev => {
      const next = !prev;
      if (next) {
      } else { stopTimer(); }
      return next;
    });
  }, [stopTimer]);

  const cur = Math.round(total * prog / 100);

  const handleProgressClick = (e) => {
    e.stopPropagation();
    const r = e.currentTarget.getBoundingClientRect();
    setProg(Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)));
  };

  return (
    <div className="player" onClick={togglePlay}>
      <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, background: video.bg }} />
      {!playing && (
        <div className="play-btn-overlay">
          <svg width="22" height="22" viewBox="0 0 10 12" fill="white"><polygon points="1,1 9,6 1,11" /></svg>
        </div>
      )}
      <div className="player-bar" onClick={e => e.stopPropagation()}>
        <div className="progress-track" onClick={handleProgressClick}>
          <div className="progress-fill" style={{ width: `${prog}%` }} />
        </div>
        <div className="player-controls">
          <button className="pctrl-btn" onClick={togglePlay}>
            {playing ? icons.pause : icons.play}
          </button>
          <button className="pctrl-btn">{icons.next}</button>
          {icons.vol}
          <input type="range" defaultValue="80" style={{ width: 64, accentColor: "#E24B4A" }} onClick={e => e.stopPropagation()} />
          <span className="time-text">{fmtTime(cur)} / {video.dur}</span>
          <button className="pctrl-btn fullscreen-btn">{icons.fullscreen}</button>
        </div>
      </div>
    </div>
  );
}

// ── WatchPage ────────────────────────────────────────────
function WatchPage({ video, onBack, onWatch }) {
  const [liked, setLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);
  const [comments, setComments] = useState(BASE_COMMENTS);
  const [commentText, setCommentText] = useState("");
  const [showCommentActions, setShowCommentActions] = useState(false);

  useEffect(() => {
    setLiked(false); setSubscribed(false); setDescExpanded(false);
    setComments(BASE_COMMENTS); setCommentText(""); setShowCommentActions(false);
  }, [video.id]);

  const submitComment = () => {
    if (!commentText.trim()) return;
    const newComment = { id: Date.now(), name: "나", initials: "ZIA", color: "#48e540", ago: "방금 전", text: commentText.trim(), likes: 0 };
    setComments(prev => [newComment, ...prev]);
    setCommentText(""); setShowCommentActions(false);
  };

  const recVideos = VIDEOS.filter(v => v.id !== video.id);

  return (
    <div className="watch-layout">
      <div className="watch-main">
        <button className="back-btn" onClick={onBack}>{icons.back} 뒤로가기</button>
        <Player video={video} />

        <div className="watch-title">{video.title}</div>
        <div className="watch-meta">
          <span className="watch-stats">{video.views} · {video.ago}</span>
          <div className="action-btns">
            <button className={`action-btn${liked ? " liked" : ""}`} onClick={() => setLiked(l => !l)}>
              {icons.like} {liked ? "1.2만" : "1.2만"}
            </button>
            <button className="action-btn">{icons.dislike} 싫어요</button>
            <button className="action-btn">{icons.share} 공유</button>
            <button className="action-btn">{icons.save} 저장</button>
          </div>
        </div>

        <div className="ch-row">
          <div className="ch-row-left">
            <div className="ch-icon" style={{ width: 40, height: 40, fontSize: 14, background: video.chColor }}>
              {video.chInitials}
            </div>
            <div>
              <div className="ch-info-name">{video.ch}</div>
              <div className="ch-info-subs">{video.chSubs}</div>
            </div>
          </div>
          <button className={`sub-btn${subscribed ? " subscribed" : ""}`} onClick={() => setSubscribed(s => !s)}>
            {subscribed ? "구독 중" : "구독"}
          </button>
        </div>

        <div className="desc-box" onClick={() => setDescExpanded(e => !e)}>
          <div className={`desc-text${descExpanded ? "" : " collapsed"}`}>{video.desc}</div>
          <div className="desc-more">{descExpanded ? "접기" : "더보기"}</div>
        </div>

        <div>
          <div className="comments-header">댓글 {comments.length}개</div>
          <div className="comment-input-row">
            <div className="comment-avatar">ZIA</div>
            <div className="comment-input-wrap">
              <input
                className="comment-input"
                placeholder="댓글 추가..."
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                onFocus={() => setShowCommentActions(true)}
                onKeyDown={e => e.key === "Enter" && submitComment()}
              />
              {showCommentActions && (
                <div className="comment-actions">
                  <button className="cancel-btn" onClick={() => { setCommentText(""); setShowCommentActions(false); }}>취소</button>
                  <button className="submit-btn" onClick={submitComment}>댓글</button>
                </div>
              )}
            </div>
          </div>
          {comments.map(c => (
            <div key={c.id} className="comment-item">
              <div className="ch-icon" style={{ width: 32, height: 32, fontSize: 11, flexShrink: 0, background: c.color }}>
                {c.initials}
              </div>
              <div>
                <div className="cmt-body-name">{c.name} · {c.ago}</div>
                <div className="cmt-text">{c.text}</div>
                <div className="cmt-actions">
                  <button className="cmt-act-btn">{icons.thumbUp} {c.likes}</button>
                  <button className="cmt-act-btn">{icons.thumbDown}</button>
                  <button className="cmt-act-btn">답글</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="watch-side">
        <div className="side-title">다음 동영상</div>
        {recVideos.map(v => <RecCard key={v.id} video={v} onWatch={onWatch} />)}
      </div>
    </div>
  );
}

// ── HomePage ─────────────────────────────────────────────
function HomePage({ onWatch }) {
  const [activeChip, setActiveChip] = useState("전체");
  return (
    <>
      <div className="chip-bar">
        {CHIPS.map(chip => (
          <button key={chip} className={`chip${activeChip === chip ? " active" : ""}`} onClick={() => setActiveChip(chip)}>
            {chip}
          </button>
        ))}
      </div>
      <div className="video-grid">
        {VIDEOS.map(v => <VideoCard key={v.id} video={v} onWatch={onWatch} />)}
      </div>
    </>
  );
}

// ── ShortsPage ───────────────────────────────────────────
function ShortsPage() {
  return (
    <>
      <div style={{ padding: "16px 20px 8px" }}><h2 style={{ fontSize: 18, fontWeight: 700 }}>Shorts</h2></div>
      <div className="shorts-grid">
        {SHORTS.map((s, i) => (
          <div key={i} className="short-card">
            <div className="short-thumb" style={{ background: s.bg }}>
              <span className="vdur">{s.dur}</span>
            </div>
            <div className="short-title">{s.title}</div>
            <div className="short-ch">{s.ch}</div>
          </div>
        ))}
      </div>
    </>
  );
}

// ── SubsPage ─────────────────────────────────────────────
function SubsPage({ onWatch }) {
  return (
    <div style={{ padding: "16px 20px 24px" }}>
      <div className="sub-section-title">구독 중인 채널의 최신 영상</div>
      <div className="video-grid" style={{ padding: 0, marginBottom: 28 }}>
        {VIDEOS.slice(0, 3).map(v => <VideoCard key={v.id} video={v} onWatch={onWatch} />)}
      </div>
      <div className="sub-section-title">모든 구독 채널</div>
      <div>
        {SUB_CHANNELS.map((ch, i) => (
          <div key={i} className="sub-channel-row">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div className="ch-icon" style={{ width: 44, height: 44, fontSize: 14, background: ch.col }}>{ch.i}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{ch.c}</div>
                <div style={{ fontSize: 12, color: "#606060" }}>{ch.s}</div>
              </div>
            </div>
            <button className="sub-btn subscribed">구독 중</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── HistoryPage ──────────────────────────────────────────
function HistoryPage({ onWatch }) {
  return (
    <div style={{ padding: "16px 20px 24px" }}>
      <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>시청 기록</div>
      {[...VIDEOS].reverse().map(v => (
        <div key={v.id} className="history-item" onClick={() => onWatch(v.id)}>
          <div className="hthumb" style={{ width: 168, background: v.bg }}>
            <span className="vdur">{v.dur}</span>
          </div>
          <div>
            <div className="htitle">{v.title}</div>
            <div className="hch">{v.ch}</div>
            <div className="hstats">{v.views} · {v.ago}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── 메인 App ─────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [watchVideo, setWatchVideo] = useState(null);
  const mainRef = useRef(null);

  const handleWatch = useCallback((id) => {
    setWatchVideo(VIDEOS.find(v => v.id === id));
    setPage("watch");
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, []);

  const handleNav = useCallback((p) => {
    setPage(p);
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, []);

  const navItems = [
    { key: "home", label: "홈", icon: icons.home },
    { key: "shorts", label: "Shorts", icon: icons.shorts },
    { key: "subs", label: "구독", icon: icons.subs },
  ];

  return (
    <>
      <style>{css}</style>
      <div className="yt-app">
        {/* Header */}
        <header className="yt-header">
          <button className="yt-logo" onClick={() => handleNav("home")}>
            <div className="logo-icon">
              <svg viewBox="0 0 10 8" style={{ width: 12, height: 12 }}><polygon points="3,1 3,7 9,4" fill="white" /></svg>
            </div>
            YouTube
          </button>
          <div className="search-wrap">
            <input type="text" placeholder="검색" />
            <button>{icons.search}</button>
          </div>
          <div className="hdr-right">
            <button className="icon-btn">{icons.mic}</button>
            <button className="icon-btn">{icons.bell}</button>
            <div className="avatar">ZIA</div>
          </div>
        </header>

        <div className="yt-body">
          {/* Sidebar */}
          <nav className="sidebar">
            {navItems.map(({ key, label, icon }) => (
              <button key={key} className={`nav-item${page === key ? " active" : ""}`} onClick={() => handleNav(key)}>
                <span style={{ width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</span>
                {label}
              </button>
            ))}
            <div className="nav-divider" />
            <button className={`nav-item${page === "history" ? " active" : ""}`} onClick={() => handleNav("history")}>
              <span style={{ width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icons.history}</span>
              시청 기록
            </button>
            <button className="nav-item" onClick={() => handleNav("home")}>
              <span style={{ width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icons.playlist}</span>
              재생목록
            </button>
            <div className="nav-divider" />
            <div className="nav-section">구독 채널</div>
            {SUB_CHANNELS.map((ch, i) => (
              <button key={i} className="nav-item">
                <div className="sub-icon" style={{ background: ch.col }}>{ch.i}</div>
                {ch.c}
              </button>
            ))}
          </nav>

          {/* Main */}
          <main className="main" ref={mainRef}>
            {page === "home" && <HomePage onWatch={handleWatch} />}
            {page === "shorts" && <ShortsPage />}
            {page === "subs" && <SubsPage onWatch={handleWatch} />}
            {page === "history" && <HistoryPage onWatch={handleWatch} />}
            {page === "watch" && watchVideo && (
              <WatchPage video={watchVideo} onBack={() => handleNav("home")} onWatch={handleWatch} />
            )}
          </main>
        </div>
      </div>
    </>
  );
}
