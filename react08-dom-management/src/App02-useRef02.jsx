import { useRef, useState } from "react";
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
  //화면의 새로운 랜더링을 위한 State 정의
  const [renderer, setRenderer] = useState(0);
  //Ref를 0으로 정의
  const countRef = useRef(0);
  //일반 변수를 0으로 정의
  let countVar = 0;

  //State를 변겨해서 화면을 새롭게 랜더링한다.
  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  //Ref를 1 증가시킨다.
  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref", countRef.current);
  };
  //일반 변수를 1 증가.
  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("Var", countVar);
  };

  //각 변수의 현재값을 출력한다.
  const printResult = () => {
    console.log(`Ref : ${countRef.current}, Var : ${countVar}`);
  };

  /**
   * State를 변경시키면 그때마다 화면이 새롭게 랜더링된다. 이것은
   * App()을 재호출하는 것이므로 지역변수로 선언된 countVar는 그때마다 0으로 초기화된다.
   * 즉 컴포넌트의 생명주기 안에서 값을 유지하고 싶다면 State나 Ref를 사용해야되고
   * 그렇지 않다면 일반변수를 사용하면 된다.
   */
  return (
    <>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={doRendering}>랜더링</button>
      <button onClick={increaseRef}>Ref증가</button>
      <button onClick={increaseVar}>Var증가</button>
      <button onClick={printResult}>Ref/Var결과출력</button>
    </>
  );
}

export default App;
