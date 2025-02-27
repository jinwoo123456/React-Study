import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Edit(props) {
  // 페이지 이동을 위한 Hook

  const navigate = useNavigate();
  const { idx } = useParams();

  // 빈 객체를 초기값으로 한 State 생성
  const [boardData, setBoardData] = useState({
    idx: { idx },
    tname: "",
    name: "",
    subject: "",
    content: "",
  });

  // 요청 Url과 쿼리스트링을 나눠서 정의
  const requestUrl = "http://nakja.co.kr/APIs/php7/boardEditJSON.php";
  const parameter = `tableName=nboard_news&idx=${idx}`;

  useEffect(() => {
    fetch(`${requestUrl}?${parameter}`)
      .then((result) => result.json())
      .then((json) => {
        console.log("useEffect.json = ", json);
        // 콜백 데이터로 State 변경
        setBoardData(json);
      });
    return () => {
      console.log("useEffect실행==>컴포넌트 언마운트");
    };
  }, [idx]);

  return (
    <>
      <header>
        <h2>게시판-읽기</h2>
      </header>
      <nav>
        {/* <a href="/list">목록</a>&nbsp; 
          <a href="/edit">수정</a>&nbsp;
          <a href="/delete">삭제</a> */}
        <Link to="/list">목록</Link>&nbsp;
        <Link to={`/edit/${params.idx}`}>수정</Link>&nbsp;
        <Link to="/delete">삭제</Link>
      </nav>
      <article>
        <table id="boardTable">
          <colgroup>
            <col width="30%" /> <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th>작성자</th>
              <td>{boardData.name}</td>
            </tr>
            <tr>
              <th>제목</th>
              <td>{boardData.subject}</td>
            </tr>
            <tr>
              <th>날짜</th>
              <td>{boardData.regdate}</td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                {/* HTML 태그가 그대로 출력됨. React는 보안적인 문제로
                태그를 화면에 그대로 출력하는것이 디폴트 설정이다. */}
                {boardData.content}

                {/* 마크업이 적용된 상태로 출력된다. */}
                {/* <td
                  dangerouslySetInnerHTML={{ __html: boardData.content }}
                ></td> */}
              </td>
            </tr>
          </tbody>
        </table>
      </article>
      <hr />
    </>
  );
}
