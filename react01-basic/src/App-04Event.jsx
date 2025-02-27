import "./App.css";

/**
 *이벤트 처리:
 html에서는 이벤트 리스너(핸들러)를 작성할때 대소문자를 구분하지 않는다.
 하지만 react에서는 이벤트명 첫글자를 반드시 대문자로 기술해야함
 또한 이벤트는 자식 컴포넌트가 부모 컴포넌트로 데이터를 전달하는 용도로 사용됨. 
 * */
function MyBody(props) {
  const liTag1 = [];
  const liTag2 = [];

  for (let i = 0; i < props.propData1.length; i++) {
    console.log(props.propData1[i]);
    liTag1.push(<li key={i}>{props.propData1[i]}</li>);
  }
  let keyCnt = 0;
  for (let row of props.propData2) {
    liTag2.push(<li key={keyCnt++}>{row}</li>);
  }
  return (
    <ol>
      <li>
        <a
          href="/"
          onClick={() => {
            props.onMyAlert1();
          }}
        >
          프론트앤드
        </a>
      </li>
      <ul>
        <li>{liTag1}</li>
      </ul>
      <li>
        {" "}
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onMyAlert2("백엔드");
          }}
        >
          백엔드
        </a>
      </li>
      <ul>
        <li>{liTag2}</li>
      </ul>
    </ol>
  );
}

function App() {
  const myData1 = ["html5", "css3", "javascript", "jquery"];
  const myData2 = ["java", "Oracle", "JSP", "Spring Boot"];
  return (
    <div className="App">
      <h2> React - 이벤트 처리</h2>

      <MyBody
        propData1={myData1}
        propData2={myData2}
        onMyAlert1={function () {
          alert("알림창을 띄웁니다.");
        }}
        onMyAlert2={function (msg) {
          alert(msg);
        }}
      />
    </div>
  );
}

export default App;
