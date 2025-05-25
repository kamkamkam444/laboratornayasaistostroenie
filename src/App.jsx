import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Aside from './components/Aside';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <main className="main">
          <Section />
          <article className="article">
            <Routes>
              <Route path="/" element={<Navigate to="/news" />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </article>
          <Aside />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;