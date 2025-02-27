import React, { useRef, useState } from "react";

export default function Stopwatch(props) {
  //스탑워치가 동작중인지 확인하기 위한 State
  //false면 멈춘 상태
  const [timerFlag, setTimerFlag] = useState(false);
  //타이머에 사용할 시간
  let [ticker, setTicker] = useState(0);

  //setInterval()의 반환값을 저장후 clearInterval()에 사용하기 위한 Ref
  let timerRef = useRef(0);
  const startTimer = () => {
    ticker++;
    timerRef.current = setInterval(() => {
      console.log("timer", ticker);
      setTicker(ticker++);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timerRef.current);
  };
  console.log("timerRef", timerRef);

  return (
    <>
      <div className="stopwatch">
        <h1 className="h1">StopWatch</h1>
        <span className="stopwatch-time">{ticker}</span>
        <button
          onClick={() => {
            setTimerFlag(!timerFlag);
            timerFlag == true ? stopTimer() : startTimer();
          }}
        >
          {timerFlag == false ? "Start" : "Stop"}
        </button>
        <button
          onClick={() => {
            if (timerFlag == true) {
              alert("StopWatch가 동작중입니다.");
            } else {
              setTicker(0);
            }
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
