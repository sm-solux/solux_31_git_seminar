import { useState, useEffect } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+KR:wght@300;400;500;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

  :root {
    --bg: #f2f6f2;
    --surface: #ffffff;
    --surface2: #eef1f8;
    --border: #dde2ef;
    --accent: #72bd57;
    --accent2: #ff6b6b;
    --accent3: #00b894;
    --text: #1a1d2e;
    --text-muted: #6b7280;
    --text-dim: #a0aab8;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
  }

  .portfolio-root {
    min-height: 100vh;
    background: var(--bg);
    position: relative;
    overflow-x: hidden;
  }

  /* BG grid */
  .portfolio-root::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.3;
    pointer-events: none;
    z-index: 0;
  }



  /* LAYOUT */
  .layout {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 48px 24px 80px;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: auto 1fr;
    gap: 24px;
  }

  /* SIDEBAR */
  .sidebar {
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* PROFILE CARD */
  .profile-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 32px 24px;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .profile-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(79,110,247,0.12);
  }

  .profile-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 80px;
    background: var(--accent);
    opacity: 0.1;
  }

  .avatar-wrap {
    position: relative;
    display: inline-block;
    margin-bottom: 16px;
    margin-top: 12px;
  }

  .avatar {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 36px;
    color: white;
    border: 3px solid var(--border);
    position: relative;
    z-index: 1;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .avatar:hover { transform: scale(1.08) rotate(-3deg); }

  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(0,184,148,0.5); }
    50%       { box-shadow: 0 0 0 8px rgba(0,184,148,0); }
  }

  .profile-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 28px;
    letter-spacing: 2px;
    color: var(--text);
    margin-bottom: 6px;
  }

  .profile-tagline {
    font-size: 12px;
    color: var(--text-muted);
    line-height: 1.6;
    font-style: italic;
    padding: 0 8px;
  }

  .profile-badge {
    display: inline-block;
    margin-top: 14px;
    padding: 4px 14px;
    background: rgba(79, 247, 101, 0.1);
    border: 1px solid rgba(6, 121, 25, 0.25);
    border-radius: 20px;
    font-size: 11px;
    color: var(--accent);
    font-family: 'Space Mono', monospace;
    letter-spacing: 1px;
  }

  /* INFO CARD */
  .info-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 22px;
    transition: border-color 0.3s;
  }

  .info-card:hover { border-color: rgba(79,110,247,0.35); }

  .card-label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--accent);
    font-family: 'Space Mono', monospace;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .card-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .info-row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 8px 0;
    border-bottom: 1px solid var(--border);
    transition: background 0.2s;
  }

  .info-row:last-child { border-bottom: none; }
  .info-row:hover { background: rgba(79,110,247,0.05); border-radius: 8px; padding: 8px 6px; }

  .info-icon {
    width: 28px; height: 28px;
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .info-key { font-size: 10px; color: var(--text-dim); margin-bottom: 2px; }
  .info-val { font-size: 13px; color: var(--text); font-weight: 500; }

  /* TAGS */
  .tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }

  .tag {
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 500;
    cursor: default;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .tag:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }

  .tag-purple { background: rgba(79,110,247,0.1); color: #3a57d4; border: 1px solid rgba(79,110,247,0.25); }
  .tag-coral  { background: rgba(255,107,107,0.1); color: #d94f4f; border: 1px solid rgba(255,107,107,0.25); }
  .tag-teal   { background: rgba(0,184,148,0.1);   color: #007a61; border: 1px solid rgba(0,184,148,0.25); }

  /* CONTACT CARD */
  .contact-btn {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--text-muted);
    font-size: 13px;
    cursor: pointer;
    transition: all 0.25s ease;
    text-align: left;
    margin-bottom: 6px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  .contact-btn:last-child { margin-bottom: 0; }

  .contact-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(79,110,247,0.06);
    transform: translateX(4px);
  }

  .contact-btn .btn-icon {
    width: 30px; height: 30px;
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px;
    flex-shrink: 0;
    transition: background 0.25s;
  }

  .contact-btn:hover .btn-icon { background: rgba(79,110,247,0.12); }

  /* MAIN CONTENT */
  .main-content { display: flex; flex-direction: column; gap: 20px; }

  /* NAV TABS */
  .nav-tabs {
    display: flex;
    gap: 6px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 6px;
  }

  .nav-tab {
    flex: 1;
    padding: 10px 12px;
    border: none;
    border-radius: 10px;
    background: transparent;
    color: var(--text-muted);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  .nav-tab:hover { color: var(--text); background: var(--surface2); }

  .nav-tab.active {
    background: var(--accent);
    color: white;
    box-shadow: 0 4px 16px rgba(79,110,247,0.2);
  }

  /* CONTENT PANELS */
  .panel { display: none; flex-direction: column; gap: 16px; animation: fadeUp 0.4s ease; }
  .panel.active { display: flex; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ABOUT PANEL */
  .about-hero {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 32px;
    position: relative;
    overflow: hidden;
  }

  .section-heading {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    letter-spacing: 2px;
    color: var(--text);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .section-heading span {
    display: inline-block;
    width: 6px; height: 24px;
    background: var(--accent);
    border-radius: 3px;
  }

  .about-text {
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.9;
    position: relative;
    z-index: 1;
  }

  .skill-bars { display: flex; flex-direction: column; gap: 14px; }

  .skill-item { }
  .skill-header { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 12px; }
  .skill-name { color: var(--text); font-weight: 500; }
  .skill-pct { color: var(--text-dim); font-family: 'Space Mono', monospace; }

  .skill-track {
    height: 6px;
    background: var(--surface2);
    border-radius: 3px;
    overflow: hidden;
  }

  .skill-fill {
    height: 100%;
    border-radius: 3px;
    background: var(--accent);
    transform-origin: left;
    animation: growBar 1s ease forwards;
    transform: scaleX(0);
  }

  @keyframes growBar {
    to { transform: scaleX(1); }
  }

  /* EXPERIENCE */
  .timeline { position: relative; padding-left: 24px; }

  .timeline::before {
    content: '';
    position: absolute;
    left: 8px; top: 0; bottom: 0;
    width: 1px;
    background: var(--accent);
    opacity: 0.4;
  }

  .timeline-item {
    position: relative;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 20px 22px;
    margin-bottom: 16px;
    transition: all 0.3s ease;
    cursor: default;
  }

  .timeline-item:hover {
    border-color: rgba(79,110,247,0.35);
    transform: translateX(6px);
    box-shadow: -4px 0 20px rgba(79,110,247,0.08);
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: -20px; top: 22px;
    width: 10px; height: 10px;
    background: var(--accent);
    border-radius: 50%;
    border: 2px solid var(--bg);
    box-shadow: 0 0 10px rgba(79,110,247,0.3);
  }

  .exp-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }
  .exp-title { font-size: 15px; font-weight: 700; color: var(--text); }
  .exp-org { font-size: 12px; color: var(--accent); font-family: 'Space Mono', monospace; margin-top: 2px; }
  .exp-period {
    font-size: 11px; color: var(--text-dim);
    background: var(--surface2);
    padding: 3px 10px; border-radius: 20px;
    font-family: 'Space Mono', monospace;
    white-space: nowrap;
  }
  .exp-desc { font-size: 13px; color: var(--text-muted); line-height: 1.7; }

  /* CONTACT PANEL */
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

  .contact-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px 20px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .contact-card::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .contact-card:hover { transform: translateY(-6px); box-shadow: 0 12px 30px rgba(0,0,0,0.1); }
  .contact-card:hover::before { opacity: 1; }

  .contact-card.email::before  { background: rgba(79,110,247,0.07); }
  .contact-card.github::before { background: rgba(255,107,107,0.07); }
  .contact-card.insta::before  { background: rgba(0,184,148,0.07); }
  .contact-card.blog::before   { background: rgba(255,160,50,0.07); }

  .contact-card:hover .contact-card-icon { transform: scale(1.2) rotate(-5deg); }

  .contact-card-icon {
    font-size: 32px; margin-bottom: 10px;
    display: block;
    transition: transform 0.3s ease;
  }

  .contact-card-label { font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 4px; }
  .contact-card-val   { font-size: 11px; color: var(--text-dim); font-family: 'Space Mono', monospace; }

  .copy-toast {
    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
    background: var(--accent); color: white;
    padding: 10px 22px; border-radius: 30px;
    font-size: 13px; font-weight: 600;
    opacity: 0; pointer-events: none;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateX(-50%) translateY(10px);
    z-index: 9999;
    box-shadow: 0 8px 24px rgba(79,110,247,0.3);
  }

  .copy-toast.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  /* RESPONSIVE */
  @media (max-width: 720px) {
    .layout { grid-template-columns: 1fr; grid-template-rows: auto; }
    .sidebar { grid-row: auto; }
    .contact-grid { grid-template-columns: 1fr; }
    .nav-tab { font-size: 12px; padding: 8px 6px; }
  }
`;

const skills = [
  { name: "React", pct: 10 },
  { name: "HTML", pct: 20 },
  { name: "CSS", pct: 30 },
  { name: "JS", pct: 40 },
  { name: "Python", pct: 50 },
];

const experiences = [
  {
    title: "로그인/회원가입 페이지 만들기",
    org: "프론트엔드 스터디",
    period: "2026.03.25",
    desc: "React를 활용한 로그인/회원가입 페이지 구현",
  },
  {
    title: "자기소개 페이지 만들기",
    org: "프론트엔드 스터디",
    period: "2026.04.01",
    desc: "React를 활용한 자기소개 페이지 구현",
  }
];

const tabs = [
  { id: "about", icon: "✦", label: "소개" },
  { id: "exp", icon: "◈", label: "활동/경험" },
  { id: "contact", icon: "⌖", label: "연락처" },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const [toast, setToast] = useState(false);
  const [copied, setCopied] = useState("");

  const showToast = (text) => {
    setCopied(text);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  // re-trigger bar animation when tab switches to about
  const [barKey, setBarKey] = useState(0);
  useEffect(() => {
    if (activeTab === "about") setBarKey((k) => k + 1);
  }, [activeTab]);

  return (
    <>
      <style>{style}</style>
      <div className="portfolio-root">
        <div className="layout">

          {/* ── SIDEBAR ── */}
          <aside className="sidebar">

            {/* Profile */}
            <div className="profile-card">
              <div className="avatar-wrap">
                <div className="avatar">ZIA</div>
              </div>
              <div className="profile-name">박지아</div>
              <div className="profile-tagline">
                솔룩스<br />프론트엔드
              </div>
              <div className="profile-badge">HELLO, WORLD!</div>
            </div>

            {/* Basic Info */}
            <div className="info-card">
              <div className="card-label">기본 정보</div>

              {[
                { icon: "🏫", bg: "rgba(79,110,247,0.1)",  key: "학교", val: "숙명여자대학교" },
                { icon: "📚", bg: "rgba(255,107,107,0.1)", key: "학과", val: "컴퓨터과학전공 3학년" },
                { icon: "📍", bg: "rgba(0,184,148,0.1)",   key: "위치", val: "서울 용산구" },
              ].map((r) => (
                <div className="info-row" key={r.key}>
                  <div className="info-icon" style={{ background: r.bg }}>{r.icon}</div>
                  <div>
                    <div className="info-key">{r.key}</div>
                    <div className="info-val">{r.val}</div>
                  </div>
                </div>
              ))}

              <div className="info-row" style={{ flexDirection: "column", alignItems: "flex-start" }}>
                <div className="info-key" style={{ marginBottom: 8 }}>관심 분야</div>
                <div className="tags">
                  {["프론트엔드"].map((t) => <span key={t} className="tag tag-purple">{t}</span>)}
                  {["백엔드"].map((t)  => <span key={t} className="tag tag-coral">{t}</span>)}
                  {["보안"].map((t)   => <span key={t} className="tag tag-teal">{t}</span>)}
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="info-card">
              <div className="card-label">빠른 연락</div>
              {[
                { icon: "✉️", label: "이메일", val: "23.cs.qkrwldk@sm.ac.kr" },
              ].map((b) => (
                <button
                  key={b.label}
                  className="contact-btn"
                >
                  <div className="btn-icon">{b.icon}</div>
                  <div>
                    <div style={{ fontSize: 10, color: "var(--text-dim)", marginBottom: 1 }}>{b.label}</div>
                    {b.val}
                  </div>
                </button>
              ))}
            </div>

          </aside>

          {/* ── MAIN ── */}
          <main className="main-content">

            {/* Tabs */}
            <nav className="nav-tabs">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  className={`nav-tab ${activeTab === t.id ? "active" : ""}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  {t.icon} {t.label}
                </button>
              ))}
            </nav>

            {/* ABOUT */}
            <div className={`panel ${activeTab === "about" ? "active" : ""}`}>
              <div className="about-hero">
                <div className="section-heading"><span />자기소개</div>
                <p className="about-text">
                  안녕하세요! 저는 컴퓨터과학전공 3학년 박지아입니다.
                  <br></br>
                  현재 솔룩스에서 <strong style={{ color: "var(--accent)" }}>프론트엔드</strong>를 담당하고 있으며 현재는 스터디 중입니다.
                </p>
              </div>

              <div className="info-card">
                <div className="card-label">기술 스킬</div>
                <div className="skill-bars" key={barKey}>
                  {skills.map((s, i) => (
                    <div className="skill-item" key={s.name}>
                      <div className="skill-header">
                        <span className="skill-name">{s.name}</span>
                        <span className="skill-pct">{s.pct}%</span>
                      </div>
                      <div className="skill-track">
                        <div
                          className="skill-fill"
                          style={{
                            width: `${s.pct}%`,
                            animationDelay: `${i * 0.12}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className={`panel ${activeTab === "exp" ? "active" : ""}`}>
              <div className="info-card" style={{ padding: "28px 28px 28px 36px" }}>
                <div className="section-heading" style={{ marginBottom: 24 }}><span />최근 활동</div>
                <div className="timeline">
                  {experiences.map((e) => (
                    <div className="timeline-item" key={e.title}>
                      <div className="exp-header">
                        <div>
                          <div className="exp-title">{e.title}</div>
                          <div className="exp-org">{e.org}</div>
                        </div>
                        <div className="exp-period">{e.period}</div>
                      </div>
                      <div className="exp-desc">{e.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div className={`panel ${activeTab === "contact" ? "active" : ""}`}>
              <div className="info-card">
                <div className="section-heading" style={{ marginBottom: 6 }}><span />연락처</div>
                <div className="contact-grid">
                  {[
                    { cls: "email",  icon: "✉️",  label: "이메일",    val: "23.cs.qkrwldk@sookmyung.ac.kr" },
                    { cls: "insta",  icon: "📸",  label: "Instagram", val: "@ldr7.xl.or"}
                  ].map((c) => (
                    <div
                      key={c.label}
                      className={`contact-card ${c.cls}`}
                    >
                      <span className="contact-card-icon">{c.icon}</span>
                      <div className="contact-card-label">{c.label}</div>
                      <div className="contact-card-val">{c.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </main>
        </div>

        {/* Toast */}
        <div className={`copy-toast ${toast ? "show" : ""}`}>✓ {copied}</div>
      </div>
    </>
  );
}