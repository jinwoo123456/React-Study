//컴포넌트 모듈화를 위해 제일 먼저 필요한 React 임포트(수입) 선언
import React from "react";

//함수형 컴포넌트 생성.파일명과 동일한 이름으로 생성한다.
function WriteComponent(props) {
  /**컴포넌트에서 실제 표현해야하는 UI를 return 문 내부에 기술한다.
   * 기존 클래스형 컴포넌트에서는 render() 함수가 있었는데, 함수형에서는
   * return이 역할을 대신한다.
   */
  return (
    <>
      {/**JSX를 통해 UI를 표현할 때 최상위 엘리먼트는 반드시 하나여야 한다. 
    여기서 3개의 상위 엘리먼트가 있으므로 프레그먼트로 묶어주면된다. */}
      <header>
        <h2>게시판-작성</h2>
      </header>
      <nav>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.changeMode("list");
          }}
        >
          목록
        </a>
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

          {/* JSX는 HTML과 유사한 문법을 사용하지만,XML의 문법을 따르므로
          반드시 쌍(Pair)을 이뤄야 한다. 따라서 input 태그도 종료 태그가
          반드시 필요하다. */}
          <input type="submit" value="전송" />
        </form>
      </article>
    </>
  );
}

/**외부파일에 해당 컴포넌트를 import 하려면 export default로 먼저
 * 내보내기 해야한다.
 */
export default WriteComponent;
