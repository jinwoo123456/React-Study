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
