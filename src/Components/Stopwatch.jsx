import React, { useState } from 'react';

const Stopwatch = () => {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  let timer;

  const toggle = () => {
    if (running) {
      clearInterval(timer);
    } else {
      timer = setInterval(() => setSeconds(s => s + 1), 1000);
    }
    setRunning(!running);
  };

  return (
    <div>
      <h1>{seconds}s</h1>
      <button onClick={toggle}>{running ? 'Dayandır' : 'Başla'}</button>
    </div>
  );
};

export default Stopwatch;