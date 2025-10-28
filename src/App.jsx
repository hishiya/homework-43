import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/about">Про нас</Link></li>
          <li><Link to="/contact">Контакти</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;