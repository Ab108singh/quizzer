import React from 'react';

const Question = ({ data, onAnswer, currentQuestion, totalQuestions }) => {
  return (
    <div className="question-container mb-4">
      <div className="question-header mb-4">
        <h3 className="text-lg">{`Question ${currentQuestion + 1} of ${totalQuestions}`}</h3>
        <p className="text-xl font-semibold">{data.questionText}</p>
      </div>
      <div className="options grid grid-cols-1 gap-4">
        {data.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
