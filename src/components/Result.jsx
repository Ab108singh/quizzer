import React from 'react';

const Result = ({ score, total }) => {
  return (
    <div className="result">
      <h2 className="text-2xl font-bold">Quiz Finished</h2>
      <p className="text-xl">
        Your score: {score} out of {total}
      </p>
      <p className="text-lg">Thank you for participating!</p>
    </div>
  );
};

export default Result;
