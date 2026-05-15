import './App.css'
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router basename='/BALONG_APTECH_FINAL_PROJECT'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;