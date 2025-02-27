import React from "react";

export default function Counter(props) {
  return (
    <>
      <div className="counter">
        {/* player 컴포넌트에서 props를 통해 내려준 함수를 호출하여
        점수를 증감시킨다. */}
        <button
          className="counter-action decrement"
          onClick={(e) => {
            console.log("-버튼클릭 ", props.idx);
            props.onChangeScore("-", props.idx);
          }}
        >
          {" "}
          -
        </button>
        <span className="counter-score">{props.score}</span>
        {/* App 컴포너트에서 전달받은 함수를 자식 컴포넌트로 다시 전달한다.
        React는 Top-down 방식으로 데이터를 전달하는 구조를 가지고 있으므로
        컴포넌트의 구조가 복잡해질수록 상태관리가 어려워 진다는 단점이 있다. */}

        <button
          className="counter-action increment"
          onClick={() => {
            console.log("+버튼", props.idx);
            props.onChangeScore("+", props.idx);
          }}
        >
          {" "}
          +
        </button>
      </div>
    </>
  );
}
