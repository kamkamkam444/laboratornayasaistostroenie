import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './i18n';
import './styles/transitions.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Aside from './components/Aside';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';
import NewsDetail from './pages/NewsDetail';
import BookingForm from './pages/BookingForm';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/news" />} />
        <Route path="/news" element={<PageTransition><News /></PageTransition>} />
        <Route path="/news/:newsId" element={<PageTransition><NewsDetail /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/tours" element={<PageTransition><Tours /></PageTransition>} />
        <Route path="/tours/:tourId" element={<PageTransition><TourDetail /></PageTransition>} />
        <Route path="/booking" element={<PageTransition><BookingForm /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <main className="main">
          <Section />
          <article className="article">
            <AnimatedRoutes />
          </article>
          <Aside />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;