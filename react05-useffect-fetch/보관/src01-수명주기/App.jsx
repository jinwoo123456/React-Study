import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./App.css";
/**
 * useEffect
 * :함수형 컴포넌트에서 Lifecycle(수명주기)를 사용하기 위한 Hook
 * 컴포넌트 내부에서 발생하는 데이터 가져오기,구독설정,수동으로 DOM조작 등과
 * 같은 작업을 수행한다.
 * 컴포넌트가 랜더링된 후 실행할 코드를 정의할때 주로 사용된다.
 *
 */

//컴포넌트의 랜더링은 해당 함수가 호출되어 실행된다는 의미
function LifeGood(props) {
  // 이 컴포넌트가 제일 먼저 실행되는 코드. 즉 랜더링 전에 실행할
  // 코드가 있다면 이 부분에 작성한다
  console.log("#Life", "LifeGood===>1 . 컴포넌트 실행(함수 호출)");

  /**
   * State 생성: 컴포넌트는 State의 상태가 변경될 때마다 새롭게 랜더링된다.
   */
  var [myRandomNum, setMyRandomNum] = useState(props.initNumber);
  var [myCount, setMyCount] = useState(1);
  /**컴포넌트가 랜더링된 후 실행된다.
   * 첫 실행에서는 마운트만 되고, 두번쨰 실행부터는 언마운트,마운트 순으로
   * 실행된다.( 컴포넌트를 통해 생성된 UI를 웹브라우저에 출력하는 것을 마운트라고 한다.
   * 반대로 제거하는 것을 언마운트라고 한다.)
   */
  useEffect(
    function () {
      console.log("#Life", "useEffect실행==>3.컴포넌트 마운트");
      return () => {
        console.log("#Life", "useEffect실행==>4.컴포넌트 언마운트");
      };
      // },);//1.의존성배열(두번째 인자)없음
      // }, []); //2. 의존성배열에 빈 배열 할당.
    },
    [myCount] // 3. 의존성배열에 myCount 할당
  );
  //======================================================

  /**의존성 배열 유무에 따른 실행 설명
   * 1. 2개의 버튼을 누를떄마다 useEffect가 실행된다.
   * 2. 최초 실행시에만 useEffect가 실행되고, 그 이후에는 실행되지 않는다.
   */
  /**앞에서 useEffect가 먼저 선언되었지만, 수명주기에서는 랜더링이 먼저
   * 수행된다. 즉 화면에 UI가 먼저 표시된 후 useEffect가 실행된다.
   */
  console.log("#Life", "return실행==>2.랜더링(return문)");
  return (
    <div>
      <h4>함수형 컴포넌트 수명주기 함수</h4>
      {/* State값 출력 */}
      <p>난수 : {myRandomNum}</p>
      <p>카운트 : {myCount}</p>

      {/* 버튼을 누를떄마다 난수를 생성하거나 카운트를 증가시켜 State를
      변경한다. State의 변경은 샤로운 렌더링으로 이어진다. */}
      <input
        type="button"
        value="난수생성"
        onClick={() => {
          setMyRandomNum(Math.random());
        }}
      />
      <input
        type="button"
        value="카운트생성"
        onClick={() => {
          setMyCount(myCount + 1);
        }}
      />
    </div>
  );
}
LifeGood.propTypes = {
  initNumber: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      <h2>React Hook - useEffect</h2>
      <LifeGood initNumber={1}></LifeGood>
    </div>
  );
}

export default App;
