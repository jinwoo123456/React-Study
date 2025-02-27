import { useMemo, useState } from "react";
import "./App.css";

/**
 * 함수형 컴포넌트의 특징
 * -컴포넌트가 랜더링될떄 정의된 함수가 호출된다.
 * 이때 함수 내부의 모든 변수가 초기화된다. 즉 랜더링 될 때마다 컴포넌트
 * 내부의 모든 코드가 실행되는 구조를 가진다
 *
 * 메모이제이션(Memoization)
 * 자주 필요한 값을 캐시에 저장해서 필요할 때마다 꺼내쓰는 기법.
 * 이를 위해 React에서는 useMemo,useCalback Hook을 제공한다.
 */

//호출시 시간이 매우 많이 걸리는 로직을 수행하는 함수(REST API 통신 등)
const longTimeCalculate = (number) => {
  console.log("시간이 많이 걸리는 계산");
  //12억번 반복한 FOR문
  for (let i = 0; i < 1234567890; i++) {}
  return number + 10000;
};

//매우 간단한 로직을 수행하는 함수
const simpleCalculate = (number) => {
  console.log("금방 끝나는 계산");
  return number + 1;
};
function App() {
  //State 생성
  const [longTimeNum, setLongTimeNum] = useState(1);
  const [simpleNum, setSimpleNum] = useState(1);

  /*Step1 :
  App컴포넌트가 렌더링되면 아래 2개의 함수를 호출하여 State값을 설정한다.
  즉 랜더링될 떄마다 호출되는 구조를 가진다*/
  //const lognTImeSum = longTimeCalculate(longTimeNum);
  //const simpleSum = simpleCalculate(simpleNum);

  /*
  Step1에서는 State가 변경될 때마다 새롭게 랜더링되므로 Long과 Short함수가
  무조건 한번씩 호출하게된다.따라서 Short만 떨어지더라도 실행시간이 매우 오래
  걸리게 되므로 프로그램 전체의 퍼포먼스가 떨어진다.
  */

  /*Step2: 
  시간이 많이 걸리는 함수를 호출한 후 반환되는 값을 useMemo를 통해
  캐시에 저장한다. 이 값은 longTimeNum이 변경될 때마다 다시 함수를 호출하므로
  Short를 눌렀을때 호출되지 않는다. 즉 랜더링시 불필요한 호출을 줄일 수 있다.
  */
  const longTImSum = useMemo(() => {
    return longTimeCalculate(longTimeNum);
  }, [longTimeNum]);
  const simpleSum = simpleCalculate(simpleNumber);
  return (
    <>
      <h2>Long Time 계산기</h2>
      {/* <input>상자의 스핀박스를 누를때마다 핸들러에서 각 함수를
      호출한다. 이 입력값을 통해 State를 변경한다. */}
      <input
        type="number"
        value={longTimeNum}
        onChange={(e) => {
          setLongTimeNum(parseInt(e.target.value));
        }}
        id=""
      />
      <span> + 10000 = {lognTImeSum}</span>
      <h2>short time 계산기</h2>
      <input
        type="number"
        name=""
        value={simpleNum}
        onChange={(e) => {
          setSimpleNum(parseInt(e.target.value));
        }}
        id=""
      />
      <span>+ 1 = {simpleSum}</span>
    </>
  );
}

export default App;
