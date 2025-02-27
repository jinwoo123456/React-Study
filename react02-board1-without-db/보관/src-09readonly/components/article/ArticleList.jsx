function ArticleList(props) {
  const lists = [];

  // for (let i = 0; i < props.boardData.length; i++) {
  //   let row = props.boardData[i];
  //   lists.push(
  //     <tr key={row.no}>
  //       <td className="cen">{row.no}</td>
  //       <td>
  //         <a
  //           href={`/read/${row.no}`}
  //           onClick={(event) => {
  //             event.preventDefault();
  //             //각 게시물의 일련번호를 수정한다.
  //             props.onChangeMode(row.no);
  //           }}
  //         >
  //           {row.title}
  //         </a>
  //       </td>
  //       <td className="cen">{row.writer}</td>
  //       <td className="cen">{row.date}</td>
  //     </tr>
  //   );
  // }

  /**퀴즈 : 목록 구현을 위한 for문을 map()함수로 수정하시오 */
  // boardData 배열의 각 항목을 map 함수로 반복 처리
  props.boardData.map((row) => {
    // 현재 처리 중인 행을 디버깅을 위해 로그 출력
    console.log("Processing row:", row);

    // lists 배열에 새로운 테이블 행 요소를 추가
    lists.push(
      <tr key={row.no}>
        {/* 게시물 번호 표시 */}
        <td className="cen">{row.no}</td>
        <td>
          {/* 게시물 읽기 링크, 클릭 시 기본 동작 방지 */}
          <a
            href={`/read/${row.no}`}
            onClick={(event) => {
              event.preventDefault();
              // 디버깅을 위해 클릭된 게시물 번호 로그 출력
              console.log("Article clicked:", row.no);

              // 게시물 번호로 onChangeMode 함수 호출
              props.onChangeMode(row.no);
            }}
          >
            {/* 게시물 제목 표시 */}
            {row.title}
          </a>
        </td>
        {/* 게시물 작성자 표시 */}
        <td className="cen">{row.writer}</td>
        {/* 게시물 날짜 표시 */}
        <td className="cen">{row.date}</td>
      </tr>
    );
  });

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
          {/* 배열에 추가한 데이터를 여기에서 출력 */}
          {lists}
        </tbody>
      </table>
    </article>
  );
}

export default ArticleList;
