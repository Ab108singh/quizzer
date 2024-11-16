import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import Navbar from './components/Navbar';
import CreateQuizPage from './pages/CreateQuizPage';
import QuizList from './pages/QuizList';
import LoginPage from './pages/Loginpage';
import RegisterPage from './pages/Registerpage';
import UserContext from './UserContext';
import axios from 'axios';

function App() {

  const{user,setUser} =useContext(UserContext)

  useEffect(()=>{
    let token = localStorage.getItem("quiz_token");

    axios.get("http://localhost:5000/api/users/varify",{headers:{Token:token}})
    .then((res)=>{
      setUser(res.data.user)
    })
    .catch((err)=>console.log(err))

  },[])




  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizList />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/create" element={<CreateQuizPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
