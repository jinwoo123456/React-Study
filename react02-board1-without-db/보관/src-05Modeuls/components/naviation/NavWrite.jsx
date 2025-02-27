function NavWrite(props) {
  return (
    <nav>
      <a
        href="/"
        onClick={function (event) {
          //<a>태그는 화면의 깜빡임이 있으므로 이벤트를 차단한다
          event.preventDefault();
          //부모가 전달해준 함수 호출
          props.onChangeMode();
        }}
      >
        목록
      </a>
    </nav>
  );
}
