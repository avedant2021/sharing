import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Topics from './components/Topics';
import Footer from './components/Footer';
import Academics from './pages/Academics';
import CompetitiveExams from './pages/CompetitiveExams';
import CPDSA from './pages/CP';
import Development from './pages/Development';
import InterviewPlacement from './pages/Interview';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<><Hero /><Topics /></>} />
          <Route path="/Academics" element={<Academics />} />
          <Route path="/CompetitiveExams" element={<CompetitiveExams />} />
          <Route path="/CP" element={<CPDSA />} />
          <Route path="/Development" element={<Development />} />
          <Route path="/interview" element={<InterviewPlacement />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;