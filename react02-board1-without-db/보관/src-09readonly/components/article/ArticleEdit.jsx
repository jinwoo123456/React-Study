/**퀴즈 : 작성시 입력값이 없어도 등록이 되는 문제가 있으므로 빈값을
 * 검증한 후 모든 값이 입력되었을떄만 등록되도록 수정하시오
 */

/**
 * 수정페이지를 구성하기 위해 기존 데이터를 Props로 전달받아 <input>의 value
 * 속성값으로 설정한다.
 * 하지만 이 경우 <input>이 readonly속성으로 랜더링되어 기존의 내용을 수정할 수 없게 된다.
 * React에서 Props는 외부에서 내부로 전달되는 일종의 파라미터이므로 애초에
 * '읽기 전용'으로 설정되어 있기 때문이다.
 *
 *
 */
function ArticleEdit(props) {
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
          props.editAction(title, writer, contents);
        }}
      >
        <table id="boardTable">
          <tbody>
            <tr>
              <th>작성자</th>
              <td>
                <input
                  type="text"
                  name="writer"
                  value={props.selectRow.writer}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>제목</th>
              <td>
                <input
                  type="text"
                  name="title"
                  value={props.selectRow.title}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>날짜</th>
              <td></td>
            </tr>
            <tr>
              <th>내용</th>
              {/**HTML에서는 <textarea>에 value 속성을 사용하지 않지만
               * jsx에서는 <input>과 동일하게 이 속성으로 값을 설정한다.
               */}
              <td>
                <textarea
                  name="contents"
                  rows="3"
                  value={props.selectRow.contents}
                  required
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="수정하기" />
      </form>
    </article>
  );
}
export default ArticleEdit;
