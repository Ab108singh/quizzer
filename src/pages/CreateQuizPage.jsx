import axios from 'axios';
import React, { useState } from 'react';

const CreateQuizPage = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [questions, setQuestions] = useState([
    { questionText: '', options: ['', '', '', ''], correct: null },
  ]);
  const [error, setError] = useState('');

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].questionText = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  const handleCorrectOptionChange = (qIndex, oIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correct = oIndex;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correct: null }]);
  };

  const validateForm = () => {
    if (!quizTitle.trim()) {
      setError('Quiz title is required.');
      return false;
    }
    if (!timeLimit || isNaN(timeLimit) || timeLimit <= 0) {
      setError('Time limit must be a positive number.');
      return false;
    }
    for (const question of questions) {
      if (!question.questionText.trim()) {
        setError('Each question must have text.');
        return false;
      }
      if (question.options.some(opt => !opt.trim())) {
        setError('Each question must have all options filled.');
        return false;
      }
      if (question.correct === null) {
        setError('Each question must have a correct option selected.');
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    const quizData = {
      title: quizTitle,
      timeLimit: parseInt(timeLimit),
      questions
    };

    axios.post("http://localhost:5000/api/quizzes", quizData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-400 min-h-screen p-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Create a New Quiz</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Quiz Title</label>
          <input
            type="text"
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter quiz title"
          />
        </div>

        <div className="mb-8">
          <label className="block text-lg font-medium mb-2">Time Limit (minutes)</label>
          <input
            type="number"
            value={timeLimit}
            onChange={(e) => setTimeLimit(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter time limit in minutes"
          />
        </div>

        {questions.map((question, qIndex) => (
          <div key={qIndex} className="mb-8 bg-gray-100 p-6 rounded-lg shadow-inner">
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Question {qIndex + 1}</label>
              <input
                type="text"
                value={question.questionText}
                onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter question text"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Options</label>
              {question.options.map((option, oIndex) => (
                <div key={oIndex} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name={`correctOption-${qIndex}`}
                    value={oIndex}
                    onChange={() => handleCorrectOptionChange(qIndex, oIndex)}
                    checked={question.correct === oIndex}
                    className="mr-2"
                  />
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder={`Option ${oIndex + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mb-4">
          <button
            onClick={addQuestion}
            className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition"
          >
            Add Another Question
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Save Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuizPage;
