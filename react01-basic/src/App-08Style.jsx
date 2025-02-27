import "./App.css";

/**
 * jsx에서 스타일을 적용하는 방법
 * jsx는 html과 조금 다른 방식으로 style을 적용해야한다.
 * class 속성은 className으로 변경해야한다. JS에서는 class를 이미
 * 예약어로 사용하고 있기 때문이다.
 * id속성은 그대로 사용할 수 있다.
 * style속성을 통해 인라인방식을 사용할때는 컬리브레이스(콧수염괄호)로
 * json객체 형태의 값을 부여해야한다.
 */
function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Verdana",
  };
  return (
    <div className="App">
      <h2>React - Style 지정하기</h2>
      <ol>
        {/**style 속성을 직접 부여할떄는 아래와 같이 컬리브레이스를 사용한다.
         *
         */}
        <li style={{ color: "red" }}>프론트앤드</li>
        {/**JSON객체로 정의한 속성을 부여 */}
        <ul style={mystyle}>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>jQuery</li>
        </ul>
        {/** App.css에 정의한 스타일시트 적용 */}
        <li className="backEnd">백엔드</li>
        <ul>
          <li id="backEndSub">Java</li>
          {/** class 속성을 사용하면 에러가 발생하진 않으나 경고가 뜨므로
           * React의 권고사항대로 className을 사용하도록 한다.
           */}
          <li className="warnings">Oracle</li>
          <li>JSP</li>
          <li>SpringBoot</li>
        </ul>
      </ol>
    </div>
  );
}

export default App;
