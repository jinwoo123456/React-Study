import { Link, useParams } from "react-router-dom";

function View(props) {
  /**
   * useParams : 컴포넌트를 라우터 처리할 때 중첩된 구조 내에서
   * :no와 같이 사용된 파라미터의 값을 얻어올 수 있는 Hook
   */
  var params = useParams();
  console.log("파라미터", params.no);

  /**
   * 데이터 배열의 크기만큼 반복하여 조건에 맞는 객체를 찾은 후 반환한다.
   * 빈 객체를 초기값으로 사용했으므로, 배열의 크기인 N만큼 반복하게 된다.
   */
  let vi = props.boardData.reduce((prev, curr) => {
    if (curr.no === Number(params.no)) {
      return curr; // 조건에 맞는 객체 반환
    } else {
      return prev; // 조건에 맞지 않으면 이전 객체 반환
    }
  }, {});

  return (
    <>
      <header>
        <h2>게시판-읽기</h2>
      </header>
      <nav>
        <Link to="/list">목록</Link>&nbsp;
        <Link to={`/edit/${params.no}`}>수정</Link>&nbsp;
        <Link to={`/delete/${params.no}`}>삭제</Link>
      </nav>
      <article>
        <table id="boardTable">
          <colgroup>
            <col width="30%" />
          </colgroup>
          <tbody>
            <tr>
              <th>작성자</th>
              <td>{vi.writer}</td>
            </tr>
            <tr>
              <th>제목</th>
              <td>{vi.title}</td>
            </tr>
            <tr>
              <th>날짜</th>
              <td>{vi.date}</td>
            </tr>
            <tr>
              <th>내용</th>
              <td>{vi.contents}</td>
            </tr>
            <tr>
              <td colSpan="2">
                <input
                  type="button"
                  value="이전글"
                  onClick={() => {
                    let no = Number(params.no) - 1;
                    if (no < 1) {
                      no = 1;
                      return alert("이전글이 없습니다.");
                    } else window.location.href = `/view/${no}`;
                  }}
                />
                <input
                  type="button"
                  value="다음글"
                  onClick={() => {
                    let no = Number(params.no) + 1;
                    if (no > props.boardData.length) {
                      no = props.boardData.length;
                      return alert("다음글이 없습니다.");
                    } else window.location.href = `/view/${no}`;
                  }}
                />
                {/* <Link to={`/view/${prevNum}`}>이전글1</Link>
                <Link to={`/view/${prevNum}`}>다음글1</Link>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    goPrev();
                  }}
                >
                  이전글2
                </a>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    goNext();
                  }}
                >
                  다음글2
                </a> */}
              </td>
            </tr>
          </tbody>
        </table>
      </article>
      <hr />
    </>
  );
}

export default View;
