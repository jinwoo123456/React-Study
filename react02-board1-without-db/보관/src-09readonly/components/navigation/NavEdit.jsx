function NavEdit(props) {
  return (
    <nav>
      {/**수정은 '열람'에서 진입하게 되므로 '뒤로'는 열람으로 전환 */}
      <a
        href="/"
        onClick={function (event) {
          //<a>태그는 화면의 깜빡임이 있으므로 이벤트를 차단한다
          event.preventDefault();
          //부모가 전달해준 함수 호출
          props.onBack();
        }}
      >
        뒤로
      </a>{" "}
      <a
        href="/"
        onClick={function (event) {
          event.preventDefault();
          props.onChangeMode();
        }}
      >
        목록
      </a>
    </nav>
  );
}
export default NavEdit;
