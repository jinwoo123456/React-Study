import { useState } from "react";
import "./App.css";
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
//목록의 네비게이션
function NavList(props) {
  return (
    <nav>
      <a
        href="/"
        onClick={function (event) {
          //<a>태그는 화면의 깜빡임이 있으므로 이벤트를 차단한다
          event.preventDefault();
          //부모가 전달해준 함수 호출
          props.onChangeMode();
        }}
      >
        글쓰기
      </a>
    </nav>
  );
}
//내용보기의 네비게이션
function NavView(props) {
  //띄어쓰기는 &nbsp ; 또는 {" "} 로 표현된다.
  return (
    <nav>
      <a
        href="/"
        onClick={function (event) {
          //<a>태그는 화면의 깜빡임이 있으므로 이벤트를 차단한다
          event.preventDefault();
          //부모가 전달해준 함수 호출
          props.onChangeMode("list");
        }}
      >
        목록
      </a>
      &nbsp;
      <a
        href="/"
        onClick={function (event) {
          event.preventDefault();
          props.onChangeMode("edit");
        }}
      >
        수정
      </a>{" "}
      <a
        href="/"
        onClick={function (event) {
          event.preventDefault();
          props.onChangeMode("delete");
        }}
      >
        삭제
      </a>
    </nav>
  );
}
//작성하기의 네비게이션
//쓰기의 네비게이션
function NavWrite(props) {
  return (
    <nav>
      <a
        href="/"
        onClick={function (event) {
          //<a>태그는 화면의 깜빡임이 있으므로 이벤트를 차단한다
          event.preventDefault();
          //부모가 전달해준 함수 호출
          props.onChangeMode();
        }}
      >
        목록
      </a>
    </nav>
  );
}
function ArticleList(props) {
  const lists = [];

  for (let i = 0; i < props.boardData.length; i++) {
    let row = props.boardData[i];
    lists.push(
      <tr key={row.no}>
        <td className="cen">{row.no}</td>
        <td>
          <a
            href={`/read/${row.no}`}
            onClick={(event) => {
              event.preventDefault();
              //각 게시물의 일련번호를 수정한다.
              props.onChangeMode(row.no);
            }}
          >
            {row.title}
          </a>
        </td>
        <td className="cen">{row.writer}</td>
        <td className="cen">{row.date}</td>
      </tr>
    );
  }

  return (
    <article>
      <table id="boardTable">
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {/**배열에 추가한 데이터를 여기에서 출력 */}
          {lists}
        </tbody>
      </table>
    </article>
  );
}
function ArticleView(props) {
  return (
    <article>
      <table id="boardTable">
        <colgroup>
          <col width="20%" />
          <col width="*" />
        </colgroup>
        <tbody>
          <tr>
            <th>작성자</th>
            <td>성유겸</td>
          </tr>
          <tr>
            <th>제목</th>
            <td>오늘은 React 공부하는 날</td>
          </tr>
          <tr>
            <th>날짜</th>
            <td>2023-05-05</td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              열심히 해봅시당
              <br />
              열공 합시당
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

function ArticleWrite(props) {
  return (
    <article>
      <form action="">
        <table id="boardTable">
          <tbody>
            <tr>
              <th>작성자</th>
              <td>
                <input type="text" name="writer" />
              </td>
            </tr>
            <tr>
              <th>제목</th>
              <td>
                <input type="text" name="title" />
              </td>
            </tr>
            <tr>
              <th>날짜</th>
              <td>
                <textarea name="contents" rows="3"></textarea>
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                열심히 해봅시당
                <br />
                열공 합시당
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="전송" />
      </form>
    </article>
  );
}
/**{no: 1, title: "오늘은 React 공부하는날", writer: "낙자썜", date: "2024-12-19"}, */
function App() {
  //게시판의 데이터로 사용할 객체형 배열
  const boardData = [
    {
      no: 1,
      title: "오늘은 React 공부하는날",
      writer: "낙자썜",
      date: "2024-12-19",
    },
    {
      no: 2,
      title: "어제는 javascript 공부했어",
      writer: "낙자썜",
      date: "2024-12-20",
    },
    {
      no: 3,
      title: "내일은 프로젝트 해야지",
      writer: "낙자썜",
      date: "2024-12-21",
    },
  ];
  /**화면 전환을 위한 state 생성. 변수명은 mode,초가값은 list, 변경시 사용할
   * 함수는 set Mode로 지정
   */
  const [mode, setMode] = useState("list");
  //컴포넌트와 타이틀을 저장할 변수
  let articleComp, navComp, titleVar;
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
          setMode("view");
        }}
      ></ArticleList>
    );
  } else if (mode === "view") {
    titleVar = "게시판-읽기(props)";
    navComp = (
      <NavView
        onChangeMode={(pmode) => {
          setMode(pmode);
        }}
      ></NavView>
    );
    articleComp = <ArticleView></ArticleView>;
  } else if (mode === "write") {
    titleVar = "게시판-작성하기(props)";
    navComp = (
      <NavWrite
        onChangeMode={() => {
          setMode("list");
        }}
      ></NavWrite>
    );
    articleComp = <ArticleWrite></ArticleWrite>;
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
