export function ArticleView(props) {
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
            <td>{props.selectRow.writer}</td>
          </tr>
          <tr>
            <th>제목</th>
            <td>{props.selectRow.title}</td>
          </tr>
          <tr>
            <th>날짜</th>
            <td>{props.selectRow.contents}</td>
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

export default ArticleView;
