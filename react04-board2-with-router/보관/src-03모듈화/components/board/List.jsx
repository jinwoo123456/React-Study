import { Link } from "react-router-dom";

function List(props) {
  return (
    <>
      <header>
        <h2>게시판 - 목록</h2>
      </header>
      <nav>
        {/* 각 링크는 <a>에서 <Link>태그로 변경 */}
        {/* <a href="/write">글쓰기</a> */}
        <Link to="/write">글쓰기</Link>
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
            <td>
              <a href="/view">오늘은 React 공부하는날</a>
            </td>
            <td className="cen">낙자썜</td>
            <td className="cen">2024-12-19</td>
          </tbody>
        </table>
      </article>
    </>
  );
}

export default List;
