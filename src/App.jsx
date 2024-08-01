import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import Navbar from './components/Navbar';
import CreateQuizPage from './pages/CreateQuizPage';
import QuizList from './pages/QuizList';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizList/>} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/create" element={<CreateQuizPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
