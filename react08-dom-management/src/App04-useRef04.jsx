import { useEffect, useRef } from "react";
import "./App.css";

/**
 useRef
 컴포넌트의 생명주기 안에서 값을 유지한다. 즉 새롭게 랜더링 되더라도
 값이 변하지 않고 유지된다.
 State와 동일하게 값을 마음대로 변경할 수 있지만,값이 변경될 때 
 랜더링은 되지 않는다.  
 즉 변경시 랜더링은 되지 않아야 할 상황에 유용하다.
 또한 JS의 getElementById()와 같이 DOM 요소에 접근할 수 있다.
 */

function App() {
  //useRef를 통해 상수 생성
  const inputRef = useRef();

  //화면의 랜더링이 완료된 후 입력상자로 포커스를 이동
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    //<input>의 DOM에 접근해서 value를 얻어온다.
    alert(`환영합니다 ${inputRef.current.value}님`);
    //빈값을 할당
    inputRef.current.value = "";
    //포커스 이동
    inputRef.current.focus();
  };

  return (
    <>
      {/* 앞에서 생성한 useRef를 input태그의 속성으로 추가 */}
      <input type="text" name="" placeholder="아이디" ref={inputRef} id="" />
      <button onClick={login}>로그인</button>
    </>
  );
}

export default App;
