import "./App.css";

function List(props) {
  return (
    <>
      <header>
        <h2>게시판 - 목록</h2>
      </header>
      <nav>
        <a href="/write">글쓰기</a>
      </nav>
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
            <td className="cen">1</td>
            <td>오늘은 React 공부하는날</td>
            <td className="cen">낙자썜</td>
            <td className="cen">2024-12-19</td>
          </tbody>
        </table>
      </article>
    </>
  );
}
function View(props) {
  return (
    <>
      <header>
        <h2>게시판-읽기</h2>
      </header>
      <nav>
        <a href="/list">목록</a>&nbsp; <a href="/edit">수정</a>&nbsp;
        <a href="/delete">삭제</a>
      </nav>
      <article>
        <table id="boardTable">
          <colgroup>
            <col width="30%" />
          </colgroup>
          <tbody>
            <tr>
              <th>작성자</th>
              <td>성유겸</td>
            </tr>
            <tr>
              <th>제목</th>
              <td>오늘은 React 공부하는날</td>
            </tr>
            <tr>
              <th>날짜</th>
              <td>2024-12-19</td>
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
      <hr />
    </>
  );
}

function Write(props) {
  return (
    <>
      <header>
        <h2>게시판-작성</h2>
      </header>
      <nav>
        <a href="/list">목록</a>
      </nav>
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
                <th>내용</th>
                <td>
                  <textarea name="contents" cols="22" rows="3"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="전송" />
        </form>
      </article>
    </>
  );
}
const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>페이지를 찾을 수 없습니다</p>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <List></List>
      <View></View>
      <Write></Write>
      <NotFound></NotFound>
    </div>
  );
}

export default App;
