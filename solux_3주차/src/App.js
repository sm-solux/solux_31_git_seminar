import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [menu, setMenu] = useState('홈');
  const [videos, setVideos] = useState([]);
  const [displayVideos, setDisplayVideos] = useState([]); 
  const [selectedVideo, setSelectedVideo] = useState(null); 
  const [isSearch, setIsSearch] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  useEffect(() => {
    const data = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      title: i % 3 === 0 ? `리액트 마스터 클래스: UI의 모든 것` : `개발자의 점심 시간 브이로그 #${i + 1}`,
      channel: i % 3 === 0 ? `code ui` : `데브로그`,
      views: `조회수 ${Math.floor(Math.random() * 100)}만회`,
      description: "유튜브 UI 재현 프로젝트",
      thumbnail: `https://picsum.photos/seed/${i + 150}/360/202`,
      isSubscribed: i % 3 === 0 
    }));
    setVideos(data);
    setDisplayVideos(data);
  }, []);

  const goHome = () => {
    setMenu('홈'); setSelectedVideo(null); setIsSearch(false); setIsCommentOpen(false); setDisplayVideos(videos);
  };

  const renderContent = () => {
    
    if (selectedVideo) {
      return (
        <div className="watch-page">
          <div className="watch-left">
            <div className="player-box"><img src={selectedVideo.thumbnail} alt="v" /></div>
            <div className="watch-info">
              <h2>{selectedVideo.title}</h2>
              <div className="watch-bar">
                <p>{selectedVideo.channel} • {selectedVideo.views}</p>
                <button className="comment-toggle-btn" onClick={() => setIsCommentOpen(!isCommentOpen)}>💬 댓글 보기</button>
              </div>
            </div>
            {isCommentOpen && (
              <div className="comment-container-box">
                <div className="comment-header"><h3>댓글 256개</h3><button onClick={() => setIsCommentOpen(false)}>✕</button></div>
                <div className="comment-input-row"><span className="user-icon">👤</span><input type="text" placeholder="댓글 추가..." /></div>
                <div className="comment-item"><b>@React_Lover</b> <p>보기 좋네요!</p></div>
              </div>
            )}
          </div>
          <div className="watch-right">
            {videos.slice(0, 6).map(v => (
              <div key={v.id} className="rec-card" onClick={() => {setSelectedVideo(v); setIsCommentOpen(false);}}>
                <img src={v.thumbnail} alt="r" /><div className="rec-text"><p>{v.title}</p><span>{v.channel}</span></div>
              </div>
            ))}
          </div>
        </div>
      );
    }

  
    if (menu === '내 채널') {
      return (
        <div className="my-channel-page">
          <div className="channel-header">
            <div className="channel-profile-lg">👤</div>
            <div className="channel-info-text">
              <h1>사용자 이름</h1>
              <p>@user_handle • 구독자 1.2만명 • 동영상 15개</p>
              <div className="channel-btns"><button>채널 맞춤설정</button><button>동영상 관리</button></div>
            </div>
          </div>
          <div className="channel-tabs"><span>홈</span><span>동영상</span><span>재생목록</span></div>
          <hr />
          <div className="main-video-grid">
            {videos.slice(0, 4).map(v => (
              <div key={v.id} className="video-grid-card"><img src={v.thumbnail} alt="t" /><p className="v-title">{v.title}</p></div>
            ))}
          </div>
        </div>
      );
    }

  
    if (menu === 'Shorts') {
      return (
        <div className="shorts-view">
          <div className="shorts-container">
            <div className="shorts-video-box">
              <img src="https://picsum.photos/seed/shortsfinal/400/700" alt="s" />
              <div className="shorts-text-overlay"><p><b>@Dev_Shorts</b> • 구독</p><p>클론 코딩! #React #Shorts</p></div>
            </div>
            <div className="shorts-btn-column">
              <div className="btn-group"><div className="icon-circle">👍</div><span>1만</span></div>
              <div className="btn-group"><div className="icon-circle">👎</div><span>싫어요</span></div>
              <div className="btn-group"><div className="icon-circle">💬</div><span>500</span></div>
              <div className="btn-group"><div className="icon-circle">🚀</div><span>공유</span></div>
              <div className="btn-group"><div className="icon-circle">🔄</div><span>리믹스</span></div>
            </div>
          </div>
        </div>
      );
    }

    let currentList = displayVideos;
    if (menu === '구독') currentList = videos.filter(v => v.isSubscribed);
    if (menu === '시청 기록') currentList = videos.slice(0, 5);

    return (
      <div className={isSearch ? "search-list-wrapper" : "main-video-grid"}>
        {currentList.map(v => (
          <div key={v.id} className={isSearch ? "search-row-card" : "video-grid-card"} onClick={() => setSelectedVideo(v)}>
            <div className="thumbnail-area"><img src={v.thumbnail} alt="t" /></div>
            <div className="info-area">
              <h3 className="v-title">{v.title}</h3>
              <p className="v-meta">{v.channel} • {v.views}</p>
              {isSearch && <p className="v-desc">{v.description}</p>}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo" onClick={goHome}>YouTube</div>
        <div className="search-wrapper">
          <input type="text" placeholder="검색" />
          <button className="search-btn" onClick={() => {setIsSearch(true); setSelectedVideo(null);}}>🔍</button>
        </div>
        <div className="user-menu">🔔 👤</div>
      </header>
      <div className="layout-body">
        <aside className="sidebar">
          <div className="sidebar-scroll">
            <div className={`nav-item ${menu === '홈' && !isSearch ? 'active' : ''}`} onClick={goHome}>🏠 홈</div>
            <div className={`nav-item ${menu === 'Shorts' ? 'active' : ''}`} onClick={() => {setMenu('Shorts'); setIsSearch(false); setSelectedVideo(null);}}>🎞️ Shorts</div>
            <div className={`nav-item ${menu === '구독' ? 'active' : ''}`} onClick={() => {setMenu('구독'); setIsSearch(false); setSelectedVideo(null);}}>📺 구독</div>
            <hr />
            <div className="sidebar-title">나 〉</div>
            <div className={`nav-item ${menu === '내 채널' ? 'active' : ''}`} onClick={() => {setMenu('내 채널'); setIsSearch(false); setSelectedVideo(null);}}>👤 내 채널</div>
            <div className={`nav-item ${menu === '시청 기록' ? 'active' : ''}`} onClick={() => {setMenu('시청 기록'); setIsSearch(false); setSelectedVideo(null);}}>🕒 시청 기록</div>
            <hr />
            <div className="sidebar-title">탐색</div>
            <div className="nav-item">🔥 인기 급상승</div>
            <div className="nav-item">🛍️ 쇼핑</div>
            <div className="nav-item">🎵 음악</div>
            <div className="nav-item">🎬 영화</div>
            <div className="nav-item">🎮 게임</div>
            <div className="nav-item">⚽ 스포츠</div>
            <div className="nav-item">💡 학습</div>
            <div className="nav-item">🎙️ 팟캐스트</div>
            <hr />
            <div className="sidebar-title">YouTube 더보기</div>
            <div className="nav-item"><span className="yt-red-icon">🔴</span> YouTube Premium</div>
            <div className="nav-item"><span className="yt-red-icon">🎵</span> YouTube Music</div>
            <div className="nav-item"><span className="yt-red-icon">👶</span> YouTube Kids</div>
            <hr />
            <div className="nav-item">⚙️ 설정</div>
            <div className="nav-item">🚩 신고 기록</div>
            <div className="nav-item">❓ 고객센터</div>
            <div className="nav-item">💬 의견 보내기</div>
            <div className="footer-info">
              <p>© 2026 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보, 불법촬영물 신고</p>
              <br />
              <p className="notice">크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다.</p>
            </div>
          </div>
        </aside>
        <main className="content-area">{renderContent()}</main>
      </div>
    </div>
  );
}

export default App;