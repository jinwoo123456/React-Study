//내용보기의 네비게이션
export function NavView(props) {
  //띄어쓰기는 &nbsp ; 또는 {" "} 로 표현된다.
  return (
    <nav>
      <a
        href="/"
        onClick={function (event) {
          //<a>태그는 화면의 깜빡임이 있으므로 이벤트를 차단한다
          event.preventDefault();
          //부모가 전달해준 함수 호출
          props.onChangeMode("list");
        }}
      >
        목록
      </a>
      &nbsp;
      <a
        href="/"
        onClick={function (event) {
          event.preventDefault();
          props.onChangeMode("edit");
        }}
      >
        수정
      </a>{" "}
      <a
        href="/"
        onClick={function (event) {
          event.preventDefault();
          props.onChangeMode("delete");
        }}
      >
        삭제
      </a>
    </nav>
  );
}
export default NavView;
