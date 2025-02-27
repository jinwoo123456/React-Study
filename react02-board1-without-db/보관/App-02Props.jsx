import "./App.css";
//매개변수 props를 통해 전달된 값을 받아 사용한다.
function Header(props) {
  return (
    <header>
      <h2>{props.title}</h2>
    </header>
  );
}

function Nav(props) {
  return (
    <nav>
      <a href="/">글쓰기</a>
    </nav>
  );
}
function Article(props) {
  //빈 배열 생성
  const lists = [];
  //props로 전달된 객체형 배열의 크기만큼 반복
  for (let i = 0; i < props.boardData.length; i++) {
    //각 루프에 해당하는 객체를 꺼낸 후 lists에 추가
    let row = props.boardData[i];
    lists.push(
      // 게시물의 일렬번호로 key prop을 생성.
      <tr key={row.no}>
        <td className="cen">{row.no}</td>
        {/**제목을 클릭하면 열람으로 전환. "read/번호" 형식으로 링크 작성. */}
        <td>
          <a
            href={`/read/${row.no}`}
            onClick={(event) => {
              event.preventDefault();
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

  return (
    <div className="App">
      {/**문자열은 ""을 통해 props를 전달한다. */}
      <Header title="게시판-목록(props)"></Header>
      <Nav></Nav>
      {/**변수는 {}를 통해 전달할 수 있다. */}
      <Article boardData={boardData}></Article>
    </div>
  );
}

export default App;
