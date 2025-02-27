import { useEffect, useRef, useState } from "react";
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
  const [count, setCount] = useState(1);

  /**
   * Step1 : 랜더링 횟수를 알고싶어 위와같이 State로 처리하면 첫번째 랜더링 후
   * useEffect가 실행되고,내부에서 다시 State가 변경되니 랜더링이 지속적으로 되어 무한루프에
   * 빠지게 된다.
   *
   */
  //무한루프에 빠지게됨.
  /* const [renderCount, setRenderCount] = useState(1);
  useEffect(() => {
    console.log("랜더링02", renderCount.current);
    setRenderCount(renderCount + 1);
  });*/

  /**Step2
   * 만약 이 상황에 일반변수를 사용하면 렌더링될떄마다 0으로 초기화되므로
   * 횟수를 알 수 없게 된다. 따라서 변화는 감지해야 하지만 랜더링은 안되야하는 상황에
   * useRef는 유용하게 사용된다.
   */
  const renderCount = useRef(1);
  useEffect(() => {
    console.log("랜더링02", renderCount.current);
    renderCount.current = renderCount.current + 1;
  });
  return (
    <>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        카운트증가
      </button>
    </>
  );
}

export default App;
