import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import QuickMenu from './components/QuickMenu';
import Main from './pages/Main';
/*import EBook from './pages/EBook';*/
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <QuickMenu />

      <Routes>
        <Route path="/" element={<Main />} />
        {/*<Route path="/ebook" element={<EBook />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App

