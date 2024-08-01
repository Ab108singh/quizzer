import React, { useState } from 'react';

const QuizCreator = () => {
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correct, setCorrect] = useState('');

  const addQuestion = () => {
    setQuiz([...quiz, { question, options, correct }]);
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrect('');
  };

  return (
    <div className="quiz-creator">
      <h2>Create a Quiz</h2>
      <div>
        <label>Question:</label>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <label>Option {index + 1}:</label>
            <input
              type="text"
              value={option}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[index] = e.target.value;
                setOptions(newOptions);
              }}
            />
          </div>
        ))}
      </div>
      <div>
        <label>Correct Answer:</label>
        <input type="text" value={correct} onChange={(e) => setCorrect(e.target.value)} />
      </div>
      <button onClick={addQuestion}>Add Question</button>
      <div>
        <h3>Quiz Preview</h3>
        {quiz.map((q, index) => (
          <div key={index}>
            <p>{q.question}</p>
            <ul>
              {q.options.map((opt, idx) => (
                <li key={idx}>{opt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizCreator;
