import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/quizzes')
      .then(response => {
        setQuizzes(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the quizzes!", error);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-400 min-h-screen p-8">
      <h1 className="text-5xl font-extrabold text-center text-white mb-12">Available Quizzes</h1>
      <ul className="max-w-4xl mx-auto space-y-8">
        {quizzes.map(quiz => (
          <li 
            key={quiz._id} 
            className="bg-white shadow-xl rounded-lg p-8 transition transform hover:scale-105 hover:shadow-2xl hover:bg-blue-50 flex justify-between items-center"
          >
            <div>
              <Link 
                to={`/quiz/${quiz._id}`} 
                className="text-blue-800 text-3xl font-semibold hover:underline"
              >
                {quiz.title}
              </Link>
              <div className="text-gray-600 text-md mt-4">
                <p>Created on: {moment(quiz.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                <p>Number of Questions: {quiz.questions.length}</p>
              </div>
            </div>
            <div className="text-gray-600 text-2xl font-bold">
              <p>{quiz.timeLimit} minutes</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizList;
