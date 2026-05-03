import { Link } from 'react-router-dom';
import { useState } from 'react';
import Category from '../pages/Category';

import { IoSearchOutline, IoHeartCircleOutline, IoBookOutline } from 'react-icons/io5';
import './components.css';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <div className='top-nav'>
                <span>로그인</span>
                <span>알림</span>
            </div>

            <div className='main-header'>
                <div>
                    <Link to='/'>
                        <img src="/logo.png" alt="교보문고" />
                    </Link>
                </div>

                <div className='search-container'>
                    <select style={{ border:'none', outline:'none', marginLeft:'10px' }}>
                        <option>통합검색</option>
                        <option>제목</option>
                        <option>저자</option>
                        <option>출판사</option>
                    </select>
                    <input  style={{ border:'none', outline:'none', width:'250px', height:'50px' }} type="text" />
                    <IoSearchOutline style={{ fontSize: '35px', color:'#999', marginRight:'10px' }}/>
                </div>

                <div className='user-menu'>
                    <div className='user-select'>
                        <IoHeartCircleOutline style={{fontSize:'40px'}} />
                        <span style={{fontSize:'14px'}} >희망도서</span>
                    </div>
                    <div className='user-select'>
                        <IoBookOutline style={{fontSize:'40px'}} />
                        <span style={{fontSize:'14px'}} >내서재</span>
                    </div>
                </div>
            </div>

            <nav className='nav'>
                <div className='nav-inner'>
                    <button className='nav-button' onClick={() => setOpen(!open)}>
                        ☰ 전체메뉴
                    </button>
                    <Link className='nav-link' to="">전자책</Link>
                </div>
                
                {open && <Category />}
            </nav>

        </header>
    );
};

export default Header;