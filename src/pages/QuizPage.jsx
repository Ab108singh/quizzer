import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quiz from '../components/Quiz';
import axios from 'axios';

const QuizPage = () => {
  const { id } = useParams(); // Get the quiz ID from the URL
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/quizzes/${id}`)
      .then(response => {
        setQuiz(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the quiz!", error);
        setError('Failed to load quiz. Please try again later.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  console.log(quiz)
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{quiz.title}</h2>
      <Quiz questions={quiz.questions} time={quiz.timeLimit} />
    </div>
  );
};

export default QuizPage;
