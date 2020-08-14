import React, { useState } from 'react';
import './App.css';
import { Typography, Button } from 'antd';
import CountDown from 'ant-design-pro/lib/CountDown';


function App() {
  const [initialDate, setInitialDate] = useState();
  const [firstActivated, setFirstActivated] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [clicks, setClicks] = useState(0);

  function increaseClicks() {
    if(clicks === 0) {
      setFirstActivated(true)
      setInitialDate(new Date().getTime());
    }
    setClicks(clicks + 1)
  }

  function onTimerEnd (){
    setIsActive(false)
  }

  return (
    <div id="page">
      <Typography.Title id="title">⏱ cps tester</Typography.Title>
      {firstActivated && <CountDown  target={initialDate + 6000} onEnd={onTimerEnd} />}
      <Button onClick={increaseClicks} disabled={!isActive} type="primary" size="large">Click Me</Button>
      <Typography.Text strong id="result">Result: {clicks / 5} cps!</Typography.Text>
    </div >
  );
}

export default App;
