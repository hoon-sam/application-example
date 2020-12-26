import React, { useState, useEffect, useRef } from 'react';

export default function Timer() {

  const [time, setTime] = useState(0);
  const [isPause, setPause] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
  }, [time]);

  const start = () => {
    if (isPause) return;
    setPause(true);
    countRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  const pause = () => {
    if (!isPause) return;
    setPause(false);
    clearInterval(countRef.current);
  }

  const stop = () => {
    pause();
    setTime(0);
  }

  const formatTime = () => {
    const getSeconds = `0${(time % 60)}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  }
  

  return (
    <div>
      <div>{ formatTime() }</div>
      <button onClick={start}>시작</button>
      <button onClick={pause}>일시정지</button>
      <button onClick={stop}>중지</button>
    </div>
  );
}