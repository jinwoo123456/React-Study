import "./App.css";
// import {BrowserRouter} from 'react-router-dom';
import { Route, Routes, useNavigate } from "react-router-dom";

// 모듈화 처리한 컴포넌트 임포트
import { useState } from "react";
import List from "./components/board/List";
import View from "./components/board/View";
import Write from "./components/board/Write";
import NotFound from "./components/common/NotFound";

const nowDate = () => {
  // 현재날짜
  let dateObj = new Date();
  var year = dateObj.getFullYear();
  var month = ("0" + (1 + dateObj.getMonth())).slice(-2);
  var day = ("0" + dateObj.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
};

const nowTime = () => {
  let dateObj = new Date();
  var hour = dateObj.getHours();
  var min = dateObj.getMinutes();
  console.log("hour,min :>> ", hour, min);
  return hour + ":" + min;
};

function App() {
  // 데이터로 사용할 객체형 배열 생성
  // 작성 처리를 위해 기존 배열을 state로 변경
  const [boardData, setBoardData] = useState([
    {
      no: 1,
      title: "오늘은 React공부하는날",
      writer: "낙짜쌤",
      date: "2023-01-01",
      time: "22:30",
      contents: "React를 뽀개봅시다",
    },
    {
      no: 2,
      title: "어제는 Javascript공부했음",
      writer: "유겸이",
      date: "2023-03-03",
      time: "21:30",
      contents: "Javascript는 할게 너무 많아요",
    },
    {
      no: 3,
      title: "내일은 Project해야지",
      writer: "개똥이",
      date: "2023-05-05",
      time: "12:30",
      contents: "Project는 뭘 만들어볼까?",
    },
  ]);

  // 시퀀스용 state 생성. 초기값은 4로 설정
  const [nextNo, setNextNo] = useState(4);

  // 작성 완료 후 페이지 이동을 위한 Hook
  const navigate = useNavigate();

  return (
    <>
      <div className="App">
        {/* 라우터 처리를 위한 BrowserRouter 컴포넌트는 main.jsx로 이동함 */}
        <Routes>
          {/* 데이터로 생성한 배열을 Props로 자식컴포넌트로 전달한다. */}
          <Route path="/" element={<List boardData={boardData}></List>}></Route>
          <Route path="/list" element={<List boardData={boardData} />}></Route>
          {/* 열람의 경우 게시물의 상세번호를 통해 객체를 선택해야 하므로 중첩라우터로
        구현하고, 일련번호의 경우 :no로 작성되어 있다. */}
          <Route path="/view">
            <Route path=":no" element={<View boardData={boardData} />} />
          </Route>
          {/* Write 컴포넌트 내에서 글쓰기 처리를 할 수 있도록 App컴포넌트에서
        생성한 모든 State와 관련함수를 Props로 전달한다. */}
          <Route
            path="/write"
            element={
              <Write
                boardData={boardData}
                setBoardData={setBoardData}
                nextNo={nextNo}
                setNextNo={setNextNo}
                navigate={navigate}
                nowDate={nowDate}
                nowTime={nowTime}
              ></Write>
            }
          ></Route>
          <Route path="/edit">
            <Route
              path=":no"
              element={
                <Write
                  boardData={boardData}
                  setBoardData={setBoardData}
                  navigate={navigate}
                  nowDate={nowDate}
                  nowTime={nowTime}
                ></Write>
              }
            />
          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
