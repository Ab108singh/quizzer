import React, { useEffect, useState } from 'react';

const Timer = ({timeLeft,setTimeLeft}) => {
   

  useEffect(() => {
    if (timeLeft === 0) return;
    const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft]);

  return (
    <div className="timer mb-4 text-right text-lg font-semibold">
      Time Left: <span className={`text-${timeLeft < 10 ? 'red' : 'green'}-500`}>{timeLeft}</span> seconds
    </div>
  );
};

export default Timer;
