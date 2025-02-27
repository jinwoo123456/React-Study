//리덕스를 관리하기 위해 필요한 Provider컴포넌트와 관련 Hook에 대한 패키지 임포트
import { Provider, useDispatch, useSelector } from "react-redux";
//리덕스 스토어를 생성하기 위한 패키지 임포트.
import { legacy_createStore as createStore } from "redux";
import "./App.css";

/**
 * Redux(리덕스)란?
 * :React로 제작한 애플리케이션의 상태관리를 위한 라이브러리로 React와 함께
 * 사용되지만 써드파티로 제공되므로 별도로 설치해야한다.
 */

/**
 * store 생성시 주입할 Reducer(리듀서) 함수를 먼저 생성한다.
 * 리듀서는 Store에 있는 State를 변경하기 위한 코드를 실행부로 정의한다.
 * 파라미터는 2개가 필요하다.
 * currentState : 현재 State값
 * action : State 변경에 필요한 요청 파라미터. 2개 이상의 값을 전달할 수
 * 있어야 하므로 JSON 객체를 주로 사용한다.
 *
 */
function reducer(currentState, action) {
  /**최초 State가 정의되지 않는 상태라면 number를 1로 설정한다.
   * 기존 App에서는 최상위 컴포넌트에서 useState를 통해 State를 생성했지만
   * Redux가 도입되면서 Store에서 State를 생성 및 관리한다.
   */
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  //현재 State의 복사본을 스프레드 연산자를 이용해서 생성.
  const newState = { ...currentState };
  //요청(Action)을 분석한 후 상태(State)를 변경
  if (action.type === "PLUS") {
    newState.number++;
  }
  /** 변경된 state를 반환하여 적용한다. setter를 호출하는것과 동일하다. */
  return newState;
}
//앞에서 정의한 Reducer 함수를 인자로 Store를 생성한다.
const store = createStore(reducer);

/**
 * Store가 도입되면 Right, Left 컴포넌트에서 Props를 통해 관리하던 값이나 함수는 더이상 필요하지 않다.
 */
const Right1 = () => {
  return (
    <div>
      <h2>Right1</h2>
      <Right2 />
    </div>
  );
};

const Right2 = () => {
  return (
    <div>
      <h2>Right2</h2>
      <Right3 />
    </div>
  );
};

/**
 *
 * useDispatch 훅(Hook)
 * : State값을 변경할떄 Reducer 함수를 호출하는 역할을 한다.
 */
const Right3 = () => {
  /**
   * type를 PLUS로 설정하여 Store에 정의된 Reducer 함수를 호출한다.
   * JSON 객체로 생성하면되고, 이 객체를 Action이라고 한다.
   */
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Right3</h2>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      />
    </div>
  );
};
/**
 * App컴포넌트로부터 전달받은 Props를 자식 컴포넌트로 재 전달한다.
 */
const Left1 = () => {
  return (
    <div>
      <h2>Left1</h2>
      <Left2 />
    </div>
  );
};
const Left2 = () => {
  return (
    <div>
      <h2>Left2</h2>
      <Left3 />
    </div>
  );
};
/**
 * useSelector 훅(Hook)
 * : Store에 정의된 State값을 선택할 때 사용한다.
 */
const Left3 = () => {
  /* //어떤 스테이트를 받을지 결정하기 위한 함수 정의
  function f(state){
    return state.number;
    }
    //정의한 함수를 인수로 전달한다.
    const number = useSelector(f);*/

  /**
   * Store에 정의된 여려개의 State중 어떤 값을 받을지 정의한 함수를
   * useSelector의 인자로 전달한다. 이 함수는 개발자가 여러 형태로
   * 커스텀 할 수 있다.
   */
  const number = useSelector((state) => {
    return state.number;
  });
  return (
    <div>
      <h2>Left3 : {number}</h2>
    </div>
  );
};
function App() {
  //Store가 생성되었으므로 App에서는 State를 관리하지 않는다.
  //최상위 컴포넌트애서 State 생성
  //const [number, setNumber] = useState(1);

  /**
   * <Provider>컴포넌트
   * : 어떤 컴포넌트에 State를 제공할지 결정하는 Wrapper 컴포넌트로
   * 여기서는 App 컴포넌트 하위의 <Left1>, <Right1> 컴포넌트를 감싸준다.
   * 그러면 하위의 모든 컴포넌트에서 Store를 공유할 수 있다.
   */
  return (
    <>
      <div className="root">
        {/* State값을 출력 */}
        <h2>React - Redux </h2>
        <div id="grid">
          {/* 컴포넌트를 Wrapping할떄 앞에서 생성한 store를 Props로
          전달한다. */}
          4
          <Provider store={store}>
            <Left1 />
            <Right1 />
          </Provider>
        </div>
      </div>
    </>
  );
}

export default App;
