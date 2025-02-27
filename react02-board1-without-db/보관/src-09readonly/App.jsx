import { useState } from "react";
import "./App.css";
import ArticleEdit from "./components/article/ArticleEdit";
import ArticleList from "./components/article/ArticleList";
import ArticleView from "./components/article/ArticleView";
import ArticleWrite from "./components/article/ArticleWrite";
import NavEdit from "./components/navigation/NavEdit";
import NavList from "./components/navigation/NavList";
import NavView from "./components/navigation/NavView";
import NavWrite from "./components/navigation/NavWrite";

//매개변수 props를 통해 전달된 값을 받아 사용한다.

//페이지가 없을때 임시로 사용하기 위한 컴포넌트
function ReadyComp() {
  return (
    <div>
      <h3>컴포넌트 준비중입니다</h3>
      <a href="/">Home 바로가기</a>
    </div>
  );
}
//매개변수 props를 통해 전달된 값을 받아 사용할 수 있다.
//모든 페이지에서 공통적으로 사용하는 컴포넌트(타이틀만 변경됨.)
function Header(props) {
  console.log("props : ", props.title);
  return (
    <header>
      <h2>{props.title}</h2>
    </header>
  );
}
//작성하기의 네비게이션
//쓰기의 네비게이션

/**{no: 1, title: "오늘은 React 공부하는날", writer: "낙자썜", date: "2024-12-19"}, */
function App() {
  //게시판 데이터로 사용할 객체 배열
  /**작성을 위해서는 기존의 객체형 배열을 state로 변환해야한다. 데이터 추가,삭제가 있을때
   * 새로운 랜더링이 되야하게 떄문이다.
   */
  //게시판의 데이터로 사용할 객체형 배열
  const [boardData, setBoardData] = useState([
    {
      no: 1,
      title: "오늘은 React 공부하는날",
      writer: "낙자썜",
      date: "2024-12-19",
      contents: "ㄴㅇㄴㅇㄴㅇ",
    },
    {
      no: 2,
      title: "어제는 javascript 공부했어",
      writer: "낙자썜",
      date: "2024-12-20",
      contents: "22222",
    },
    {
      no: 3,
      title: "내일은 프로젝트 해야지",
      writer: "낙자썜",
      date: "2024-12-21",
      contents: "project머만들가",
    },
  ]);
  /**화면 전환을 위한 state 생성. 변수명은 mode,초가값은 list, 변경시 사용할
   * 함수는 set Mode로 지정
   */

  const [mode, setMode] = useState("list");
  //선택한 게시물의 일련번호를 저장. 최초 선택한 게시물이 없으므로 null로 초기화
  const [no, setNo] = useState(null);

  const [nextNo, setNextNo] = useState(4);
  //컴포넌트와 제목을 저장할 변수 생성
  //선택한 게시물의 객체를 저장할 변수 추가
  let articleComp, navComp, titleVar, selectRow;
  //mode의 값에 따라 다른 컴포넌트를 저장한다.
  if (mode === "list") {
    titleVar = "게시판-목록(props)";
    navComp = (
      <NavList
        onChangeMode={() => {
          setMode("write");
        }}
      ></NavList>
    );
    articleComp = (
      <ArticleList
        boardData={boardData}
        onChangeMode={(no) => {
          console.log("선택한 게시물 번호" + no);
          //화면을 '열람'으로 전환
          setMode("view");
          //선택한 게시물의 일련번호로 state변경
          setNo(no);
        }}
      ></ArticleList>
    );
  } else if (mode === "view") {
    titleVar = "게시판-읽기(props)";
    navComp = (
      <NavView
        onChangeMode={(newMode) => {
          setMode(newMode);
        }}
      ></NavView>
    );

    console.log("현재no: ", no, typeof no);
    //선택한 게시물의 일련번호와 일치하는 객체를 검색
    selectRow = boardData.reduce((prev, curr) => {
      if (curr.no === no) {
        prev = curr;
        console.log("prev :  ", prev);
      }
      return prev;
    }, null);
    //검색된 게시물을 props를 통해 자식 컴포넌트로 전달
    articleComp = <ArticleView selectRow={selectRow}></ArticleView>;
  } else if (mode === "write") {
    titleVar = "게시판-작성하기(props)";
    navComp = (
      <NavWrite
        onChangeMode={() => {
          setMode("list");
        }}
      ></NavWrite>
    );
    articleComp = (
      <ArticleWrite
        writerAction={(t, w, c) => {
          console.log("새로운 게시글:", t, w, c);

          //작성일을 Date 객체를 통해 생성
          let dateObj = new Date();
          var year = dateObj.getFullYear(); //현재 년도
          //getMonth() : 0~11까지를 반환하므로 +1해야 현재 월을 구할 수 있음.
          var month = ("0" + (1 + dateObj.getMonth())).slice(-2);
          var day = ("0" + dateObj.getDate()).slice(-2);
          /**
           * 월과 일이 한자리인 경우에는
           * 01과 가티 설정되고
           * 두자리인 경우에는 031과 같이 문자열이 생성되므로 끝에서 두자리만 잘라낸다.
           * 따라서 0000-00-00의 포멧으로 날짜를 생성한다.
           */
          let nowDate = year + "-" + month + "-" + day;
          //추가할 객체 생성
          let addBoardData = {
            no: nextNo,
            title: t,
            writer: w,
            date: nowDate,
            contents: c,
          };
          //추가 방법1(권장)
          let copyBoardData = [...boardData];
          console.log("복사된 데이터:", copyBoardData);
          copyBoardData.push(addBoardData);
          console.log("추가된 데이터:", copyBoardData);
          setBoardData(copyBoardData);
          console.log("업데이트된 boardData:", boardData);
          /**
           * 배열의 복사본을 만들면 메모리에는 새로운 배열이 하나 생성된다.
           * 복사본에 데이터를 추가한 후 이를 통해 state를 변경한다. 그러면 새롭게
           * 생성된 배열의 참조값을 통해 state변경하게되므로 react는 변화를 감지하여
           * 새로운 랜더링을 하게된다.
           */
          //추가방법2
          //원본 배열에 새로운 객체를 추가
          // boardData.push(addBoardData);
          // console.log(boardData);
          // setBoardData(boardData);

          setNextNo(nextNo + 1);
          setMode("list");
        }}
      ></ArticleWrite>
    );
  } else if (mode === "delete") {
    //삭제1(권장)
    let newBoardData = [];
    //데이터로 사용중인 객체형 배열의 크기만큼 반복
    for (let i = 0; i < boardData.length; i++) {
      //삭제할 객체를 제외한 나머지를 새로운 배열에 추가
      if (boardData[i].no !== no) {
        //따라서 삭제할 객체는 배열에 추가되지 않는다.
        newBoardData.push(boardData[i]);
      }
    }
    //새롭게 생성된 배열을 통해 state를 변경한다.
    setBoardData(newBoardData);
    /*
  삭제2:
  for(let i=0; i<boardData.length; i++){
    if(boardData[i].no === no){
      boardData.splice(i,1);
    }
  }
  setBoardData([boardData]);*/

    setMode("list");
  } else if (mode === "edit") {
    titleVar = "게시판-수정하기(props)";
    navComp = (
      <NavEdit
        onChangeMode={() => {
          setMode("list");
        }}
        onBack={() => {
          setMode("view");
          setNo(no);
        }}
      ></NavEdit>
    );
    for (let i = 0; i < boardData.length; i++) {
      if (boardData[i].no === no) {
        selectRow = boardData[i];
      }
    }
    articleComp = <ArticleEdit selectRow={selectRow}></ArticleEdit>;
  } else {
    //모드값이 없는 경우 '준비중'을 화면에 표시
    navComp = <ReadyComp />;
    articleComp = "";
  }
  //mode의 변화에 따른 컴포넌트를 랜더링
  return (
    <div className="App">
      <Header title={titleVar}></Header>
      {navComp}
      {articleComp}
    </div>
  );
}

export default App;
