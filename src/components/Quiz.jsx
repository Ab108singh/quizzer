import React, { useState } from 'react';
import Question from './Question';
import Timer from './Timer';
import Result from './Result';

const Quiz = ({ questions,time }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time*60 ||30 );
  const handleAnswer = (selectedOption) => {
    console.log(`Selected: ${selectedOption}, Correct: ${questions[currentQuestion].correct}`);
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(prevScore => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished || !timeLeft) {
    return <Result score={score} total={questions.length} />;
  }

  return (
    <div className="quiz-container bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-8">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">Quiz</h2>
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      <Question
        data={questions[currentQuestion]}
        onAnswer={handleAnswer}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default Quiz;
