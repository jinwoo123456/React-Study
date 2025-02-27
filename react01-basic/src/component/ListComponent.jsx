import React from "react";

function ListComponent(props) {
  return (
    <>
      <header>
        <h2>게시판 - 목록</h2>
      </header>
      <nav>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.changeMode("write");
          }}
        >
          글쓰기
        </a>
      </nav>
      <article>
        <table id="boardTable">
          <thead>
            <tr>
              <th>No</th>
              <th>제목</th>
              <th>작성자</th> .<th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <td className="cen">1</td>
            <td>
              {/** 부모에서 전달된 Props를 아래와 같이 호출해서
               * mode를 view로 변경한다.
               */}
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  props.changeMode("view");
                }}
              ></a>
              오늘은 React 공부하는날
            </td>
            <td className="cen">낙자썜</td>
            <td className="cen">2024-12-19</td>
          </tbody>
        </table>
      </article>
    </>
  );
}

export default ListComponent;
