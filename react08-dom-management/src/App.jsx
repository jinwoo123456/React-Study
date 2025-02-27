import { useEffect, useId, useRef, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <MyInput1 />
    </>
  );
}
function MyInput1() {
  //useId와 useRef로 상수 생성
  const myId = useId();
  const myRef = useRef();

  useEffect(() => {
    //순수 Javascript를 통해 DOM을 얻어온다.
    const button1 = document.getElementById("btn");
    //useRef 훅을 통해 DOM을 얻어온다
    const button2 = myRef.current;
    console.log("버튼1", button1);
    console.log("버튼2", button2);
  }, []);
  //State를 통해 객체 형색의 style을 부여한다.
  const [btnStyle, setBtnStyle] = useState({
    backgroundColor: "yellow",
    color: "red",
  });

  //Javascript를 통해 DOM에 스타일을 부여한다.
  function btn1Clicked() {
    const button1 = document.getElementById("btn");
    if (button1.style.backgroundColor === "black") {
      button1.style.backgroundColor = "white";
      button1.style.color = "black";
    } else {
      button1.style.backgroundColor = "black";
      button1.style.color = "white";
    }
  }

  const btn2Clicked = () => {
    if (btnStyle.color === "red") {
      setBtnStyle({
        backgroundColor: "blue",
        color: "white",
      });
    } else {
      setBtnStyle({
        backgroundColor: "yellow",
        color: "red",
      });
    }
  };

  return (
    <div>
      {/* js를 통해서 스타일 변경 */}
      <button id="btn" onClick={btn1Clicked}>
        버튼1
      </button>
      {/* React 훅을 통해서 스타일 변경 */}
      <button id={myId} ref={myRef} onClick={btn2Clicked} style={btnStyle}>
        버튼2
      </button>
    </div>
  );
}
export default App;
