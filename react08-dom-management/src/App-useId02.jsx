import { useId } from "react";
import "./App.css";

/**
 * 각 컴포넌트별로 여러개의 DOM을 추가해야 하는 경우 useId로 하나의
 * 아이디를 생성한 후 -xxx 같은 형태로 추가적인 이름을 부여해서
 * 사용할 수 있다.
 */
function App() {
  /**useId()는 고유한 아이디를 생성해준다. DOM의 아이디를 부여하거나
   * 라벨링을 할 때 편리하다
   */

  return (
    <>
      <MyInput1 />
      <MyInput2 />
    </>
  );
}

function MyInput1() {
  //두번째 아이디를 생성.
  const id = useId();
  console.log("Id", id);
  return (
    <div>
      <label htmlFor={`${id}-name`}>이름</label>
      <input type="text" id={`${id}-name`} name="myId" />
      <br />
      <label htmlFor={`${id}-age`}>나이</label>
      <input type="text" id={`${id}-age`} name="myPass" />
    </div>
  );
}
function MyInput2() {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-name`}>이름</label>
      <input type="text" id={`${id}-name`} name="myName" />
      <br />
      <label htmlFor={`${id}-age`}>나이</label>
      <input type="text" id={`${id}-age`} name="myAge" />
    </div>
  );
}
export default App;
