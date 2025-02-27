import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit(props) {
  const boardData = props.boardData;
  const setBoardData = props.setBoardData;
  const nowDate = props.nowDate;
  const nowTime = props.nowTime;

  const navigate = useNavigate();
  const { no } = useParams();
  const [title, setTitle] = useState(props.selectRow.title);
  const [writer, setWriter] = useState(props.selectRow.writer);
  const [contents, setContents] = useState(props.selectRow.contents);
  // 현재 게시물 데이터를 찾기
  const currentData = boardData.find((item) => item.no === Number(no));

  return (
    <>
      <header>
        <h2>게시판-작성</h2>
      </header>
      <nav>
        {/* <a href="/list">목록</a> */}
        <Link to="/list">목록</Link>
      </nav>
      <article>
        <form
          onSubmit={(event) => {
            // submit 이벤트 차단
            event.preventDefault();

            // 이벤트 객체의 target으로 DOM에 입력된 내용을 얻어옴
            let w = props.writer;
            let t = event.target.title.value;
            let c = event.target.contents.value;

            // 폼값과 State, 함수의 반환값으로 새롭게 추가할 객체 생성
            let addBoardData = {
              no: nextNo,
              writer: w,
              title: t,
              contents: c,
              date: nowDate(),
              time: nowTime(),
            };

            // 복사본을 생성한 후 데이터를 추가
            let copyBoardData = [...boardData];
            copyBoardData.push(addBoardData);
            // State를 업데이트
            setBoardData(copyBoardData);
            // 시퀀스 번호도 업데이트
            setNextNo(nextNo + 1);
            // 모든 작업이 완료되면 목록으로 이동한다.
            navigate("/list");
          }}
        >
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

export default Edit;
