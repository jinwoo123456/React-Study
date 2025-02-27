import "./App.css";

//컴포넌트는 일반적인 JS의 함수와 동일하게 제작한다.
//function MyBody(){}
//화살표 함수로도 컴포넌트를 작성할 수 있다.
const MyBody = () => {
  /*
  함수형 컴포넌트에서 return은 ui화면상에 랜더링하는 역할을 한다.
  따라서 반드시 기술해야한다.
  */
  return (
    <>
      <ol>
        <li>
          프론트엔드
          <ul>
            <li>html5</li>
            <li>css3</li>
            <li>javascript</li>
            <li>jquery</li>
          </ul>
        </li>
        <li>
          백엔드
          <ul>
            <li>java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
          </ul>
        </li>
      </ol>
    </>
  );
};

/*
Vite를 통해 React 프로젝트를 생성하면 최상위 컴포넌트는 App이 된다.
App 하위 자식에 컴포넌트를 추가하면서 웹 애플리케이션을 개발하게 된다.

컴포넌트 규칙 1: 클래스 첫 글자는 대문자.
컴포넌트 규칙 2: return문에는 최상위 태그 하나만 사용해야 한다.
*/
function App() {
  return (
    /**
     * 컴포넌트에서 UI는 반드시 최상위 엘리먼트가 1개여야 한다.
     * 만약 2개 이상이 되는 경우가 있다면 하나의 태그로 묶어줘야 한다.
     * React에서는 이를 위해 프레그먼트(<></>)를 사용한다.
     *
     */
    <>
      <h2>리엑트 프로젝트 기본형</h2>
      <h2>React - 기본</h2>
      {/** 부모 컴포넌트 하위에 자식 컴포넌트를 삽입할 떄는 HTML 태그와 같이
       * 기술하면 된다. JSX는 XML의 문법을 따르므로 반드시 시작태그와 종료태그가
       * 함께 기술되어야 한다. 만약 한개의 태그만 쓰고싶다면 종료를 표현하는
       * /가 있어야 한다. 그걸 프레그먼트라고 한다.
       */}
      <MyBody />
    </>
  );
}

export default App;
