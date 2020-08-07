import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Typography, Button } from 'antd';


function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function App() {
  const [isActive, setIsActive] = useState(true);
  const [seconds, setSeconds] = useState(5);
  function decreaseSecond() {
    setSeconds(seconds - 1)
  }

  useInterval(() => {
    if (seconds > 0) {
      decreaseSecond()
    }
    if (seconds === 0) {
      setIsActive(false)
    }

  }, 1000);

  const [clicks, setClicks] = useState(0);
  function increaseClicks() {
    setClicks(clicks + 1)
  }

  return (
    <div id="page">
      <Typography.Title id="title">⏱ cps tester</Typography.Title>
      <Typography.Title id="timer">{seconds}</Typography.Title>
      <Button onClick={increaseClicks} disabled={!isActive} type="primary" size="large">Click Me</Button>
      <Typography.Text strong id="result">Result: {clicks / 5} cps!</Typography.Text>
    </div >
  );
}

export default App;
