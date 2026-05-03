import { IoBarChartOutline, IoCreateOutline, IoHeartOutline, IoInformationCircleOutline, IoGiftOutline, IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import './components.css';

const QuickMenu = () => {

    const menus = [
        { id: 1, label: '대출현황', icon: <IoBarChartOutline /> },
        { id: 2, label: '예약현황', icon: <IoCreateOutline />},
        { id: 3, label: '찜목록', icon: <IoHeartOutline /> },
        { id: 4, label: '이용안내', icon: <IoInformationCircleOutline />},
        { id: 5, label: '부록서비스', icon: <IoGiftOutline />},
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    return (
        <aside className="quick-menu">
            {menus.map((menu) => (
                <div  className='menu-item' key={menu.id}>
                    <span className="menu-icon">{menu.icon}</span>
                    <span className="menu-label">{menu.label}</span>
                </div>
            ))}
            <div className="arrow-container">
                <button className='arrow-button' onClick={scrollToTop}>
                    <IoChevronUpOutline />
                </button>
                <button className="arrow-button" onClick={scrollToBottom}>
                    <IoChevronDownOutline />
                </button>
            </div>

        </aside>
    );
};

export default QuickMenu;