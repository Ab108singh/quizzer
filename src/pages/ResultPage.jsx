import React from 'react';
import Result from '../components/Result';

const ResultPage = () => {
  // Sample score data for demonstration
  const score = 2;
  const totalQuestions = 3;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Quiz Results</h2>
      <Result score={score} total={totalQuestions} />
    </div>
  );
};

export default ResultPage;
