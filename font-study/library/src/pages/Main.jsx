import { useRef } from 'react';
import './pages.css';

function Main() {
    const bestBooks = [
        { id: 2, title: "궤도", author: "서맨사 하비", img: "https://sookmyung.dkyobobook.co.kr/upload/20611/content/ebook/4801194413395/L4801194413395.jpg" },
        { id: 3, title: "프로젝트 헤일메리", author: "앤디 위어", img: "https://sookmyung.dkyobobook.co.kr/upload/20611/content/ebook/4808925588735/L4808925588735.jpg" },
        { id: 4, title: "파과", author: "구병모", img: "https://sookmyung.dkyobobook.co.kr/upload/20611/content/ebook/4801162203621/L4801162203621.jpg" },
        { id: 5, title: "로맨스 도파민", author: "최영민", img: "https://sookmyung.dkyobobook.co.kr/upload/20611/content/ebook/480D240440960/L480D240440960.jpg" },
        { id: 6, title: "홍학의 자리", author: "정해연", img: "https://sookmyung.dkyobobook.co.kr/upload/20611/content/ebook/4808954681155/L4808954681155.jpg" },
        { id: 7, title: "궤도", author: "서맨사 하비", img: "https://sookmyung.dkyobobook.co.kr/upload/20611/content/ebook/4801194413395/L4801194413395.jpg" },
        { id: 8, title: "프로젝트 헤일메리", author: "앤디 위어", img: "https://sookmyung.dkyobobook.co.kr/upload/20611/content/ebook/4808925588735/L4808925588735.jpg" },
        { id: 9, title: "파과", author: "구병모", img: "https://sookmyung.dkyobobook.co.kr/upload/20611/content/ebook/4801162203621/L4801162203621.jpg" },
        { id: 10, title: "로맨스 도파민", author: "최영민", img: "https://sookmyung.dkyobobook.co.kr/upload/20611/content/ebook/480D240440960/L480D240440960.jpg" },
        { id: 11, title: "홍학의 자리", author: "정해연", img: "https://sookmyung.dkyobobook.co.kr/upload/20611/content/ebook/4808954681155/L4808954681155.jpg" },
    ];

    const listRef = useRef();
    const scrollLeft = () => {
        listRef.current.scrollTo({ left:0, behavior:'smooth' })
    };
    const scrollRight = () => {
        listRef.current.scrollTo({left:listRef.current.scrollWidth, behavior:'smooth' })
    };

    return (
        <div>
            <div className="background">
                <img src="/background.png" alt="표지" />
            </div>

            <div className='best-section'>
                <div className="best-header">
                    <h2>베스트자료</h2>
                    <button>더보기 +</button>
                </div>

                <div className='best-content'>
                    <div className="best-main-book">
                        <img src="https://sookmyung.dkyobobook.co.kr/upload/20611/content/ebook/480D250401050/L480D250401050.jpg" alt="대표책" />
                        <p className="book-tag">전자책</p>
                        <h3>혼모노</h3>
                        <p className="author">성해나</p>
                        <p style={{ fontSize:'14px', color:'#333' }}>2024·2025 젊은작가상, 2024 이효석문학상 우수작품상 수상작 수록</p>
                    </div>

                    <div className='best-list'>
                        {bestBooks.map((book, index) => (
                            <div className="book-card" key={book.id}>
                                <span className="rank">{index + 2}</span>
                                <img src={book.img} alt={book.title} />
                                <p className="book-tag">전자책</p>
                                <p className="title">{book.title}</p>
                                <p className="author">{book.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='new-section'>
                <div className='new-header'>
                    <h2>신착자료</h2>
                    <button>더보기 +</button>
                </div>

                <button className="nav-left" onClick={scrollLeft}>‹</button>
                <button className="nav-right" onClick={scrollRight}>›</button>
                

                <div className='new-book' ref={listRef}>
                    {bestBooks.map((book) => (
                        <div className="book-card" key={book.id}>
                            <img src={book.img} alt={book.title} />
                            <p className="book-tag">전자책</p>
                            <p className="title">{book.title}</p>
                            <p className="author">{book.author}</p>
                        </div>
                    ))}
                </div>
                
            </div>
            <hr />
            <div style={{ background:'#eee', padding:'30px'}}>
                <p>도서관명 : 숙명여자대학교 전자도서관 | 주소 : 04310 서울특별시 용산구 청파로47길 100(청파동2가) 숙명여자대학교 도서관</p>
                <p>대표전화 : 02-710-9001 | 팩스 : 02-704-6913</p>
                <p>Copyright ⓒ KYOBO BOOK CENTRE. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Main;