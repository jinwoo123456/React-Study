/**퀴즈 : 작성시 입력값이 없어도 등록이 되는 문제가 있으므로 빈값을
 * 검증한 후 모든 값이 입력되었을떄만 등록되도록 수정하시오
 */
function ArticleWrite(props) {
  return (
    <article>
      <form
        onSubmit={(event) => {
          //폼값이 전송되지 않도록 차단
          event.preventDefault();
          /**event 객체의 target 속성으로 <input>의 DOM에 접근한 후
           * 입력값을 얻어온다.
           */
          let title = event.target.title.value;
          let writer = event.target.writer.value;
          let contents = event.target.contents.value;

          /**퀴즈 : 작성시 입력값이 없어도 등록이 되는 문제가 있으므로 빈값을
 * 검증한 후 모든 값이 입력되었을떄만 등록되도록 수정하시오
          if (title === "") {
            alert("제목을 입력해주세요");
            event.target.title.focus();
            return;
 
          }*/
          //부모 컴포넌트에서 Prop로 전달해준 함수를 호출하여 데이터를 전달한다.
          props.writerAction(title, writer, contents);
        }}
      >
        <table id="boardTable">
          <tbody>
            <tr>
              <th>작성자</th>
              <td>
                <input type="text" name="writer" required />
              </td>
            </tr>
            <tr>
              <th>제목</th>
              <td>
                <input type="text" name="title" required />
              </td>
            </tr>
            <tr>
              <th>날짜</th>
              <td></td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                <textarea name="contents" rows="3" required></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="전송" />
      </form>
    </article>
  );
}
export default ArticleWrite;
