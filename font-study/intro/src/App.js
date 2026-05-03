import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <p style={{ fontSize:'70px', fontWeight:'800', color:'#fff', marginBottom:'50px'  }}>My Intro</p>
        <nav className='navigation'>
          <Link to="/">홈</Link>
          <Link to='/skills'>기술</Link>
          <Link to='/projects'>활동</Link>
          <Link to='/contact'>연락</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
