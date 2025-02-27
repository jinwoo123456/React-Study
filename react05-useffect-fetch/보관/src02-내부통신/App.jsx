import { useEffect, useState } from "react";
import "./App.css";

import PropTypes from "prop-types";

const GlobalTop = (props) => {
  console.log("#Life", "GlobalTop==>1. 컴포넌트 실행");
  const [myList, setMyList] = useState([]);
  // return문이 실행된 후 , 즉 랜더링이 완료된 후 실행되는 훅
  //return문이 실행된 후 , 즉 랜더링이 완료된 후 실행되는 훅
  useEffect(() => {
    console.log("#Life", "GlobalTop==>3. useEffect 실행");
    /**컴포넌트의 랜더링이 완료된 후 내부에 있는 json 파일을 get 방식으로
     * 요청한다.
     */
    // json 가져오기
    /**컴포넌트의 랜더링이 완료된 후 내부에 있는 json파일을 get 방식으로
     * 요청한다.
     */
    fetch("/json/myData.json", { cache: "no-cache" })
      .then((result) => {
        /**요청에 성공하면 json파일의 데이터가 매개변수로 콜백된다.
         * 콜백 데이터는 Text 형식이므로 Json 포맷으로 변환 후 반환한다.
         */
        if (!result.ok) {
          throw new Error("Failed to fetch JSON");
        }
        return result.json();
      })
      /**첫번쨰 then절에서 반환한 값은 두번쨰 then절로 반환된다.
       * 이 값을 받은 후 State를 변경한다.
       */
      .then((json) => {
        console.log(json);
        setMyList(json);
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
      });

    return () => {
      /**컴포넌트가 언마운트 될때 실행할 코드가 있다면 이 부분에
       * 기술한다.
       */
      console.log("#Life", "GlobalTop==>4. cleanup 실행");
    };
  }, []);
  /** useEffect의 두번쨰 인자인 의존성배열에 빈 배열을 추가한다.
   * 이렇게 하면 최초 한번만 실행되고 그 이상 실행되지 않는다.
   */

  // myList 배열을 순회하여 listTag 배열을 생성한다.
  var listTag = myList.map((data) => (
    // 각 항목에 고유한 key를 부여한다.
    <li key={data.id}>
      <a
        // 링크의 href 속성을 data.id로 설정한다.
        href={data.id}
        // data-id 속성을 data.num으로 설정한다.

        /*data-id 속성에 설정된 값은 Event 객체의 target 속성 하위의
        dataset.id를 통해 얻어올 수 있다 이 부분에 게시물의 일렬번호인
        num을 설정하고 있다. */
        data-id={data.num}
        // 링크 클릭 시 이벤트 핸들러를 설정한다.
        onClick={(e) => {
          // 기본 동작을 막는다.
          e.preventDefault();
          // 클릭된 항목의 data-id 값을 myLinkClick 함수에 전달한다.
          //여기서 게시물의 일렬번호는 부모컴포넌트로 전달한다.
          props.myLinkClick(e.target.dataset.id);
        }}
      >
        {/* // 링크 텍스트를 data.id로 설정한다. */}
        {data.id}
      </a>
    </li>
  ));
  //여기서
  console.log("#Life", "GlobalTop==>2. return 실행(render와 동일)");
  return (
    <nav>
      <ul>{listTag}</ul>
    </nav>
  );
};

//Props로 전달된 객체의 값을 화면에 출력하는 컴포넌트
const ContentBody = (props) => {
  return (
    <div>
      <h2>{props.myResult.name || "데이터를 선택하세요"}</h2>
      <ul>
        <li>num: {props.myResult.num || "N/A"}</li>
        <li>id: {props.myResult.id || "N/A"}</li>
        <li>cell: {props.myResult.cell || "N/A"}</li>
        <li>description: {props.myResult.description || "N/A"}</li>
      </ul>
    </div>
  );
};

function App() {
  //dto.json의 내용을 저장할 State이므로 초기값은 빈 객체로 생성.
  var [myResult, setMyResult] = useState({});

  return (
    <div className="App">
      <h2>React - 내부 서버 통신</h2>
      {/* 클릭시 내부에 저장된 dto.json 파일을 get방식으로 요청한 후
      콜백데이터를 받아오는 기능의 함수를 Props로 전달한다.
      자식 컴포넌트는 이 함수를 호출할때 게시물의 일렬번호를 전달한다. */}

      <GlobalTop
        myLinkClick={(num) => {
          console.log("클릭:", num);
          console.log(`/json/dto${num}.json`);
          fetch(`./json/dto${num}.json`)
            .then((result) => {
              if (!result.ok) {
                throw new Error("Failed to fetch JSON");
              }
              return result.json();
            })
            .then((json) => {
              console.log("결과:", json);
              setMyResult(json);
            })
            .catch((error) => {
              console.error("Error fetching JSON:", error);
            }, []);
          /**useEffect의 두번쨰 인자인 의존성배열에 빈 배열을 추가한다.
           * 이렇게 하면 최초 한번만 실행되고 그 이상 실행되지 않는다.
           * 만약 의존성배열을 생략하면 무한히 로딩되는 현상이 발생한다.
           */
        }}
      ></GlobalTop>
      <ContentBody myResult={myResult}></ContentBody>
    </div>
  );
}

GlobalTop.propTypes = {
  myLinkClick: PropTypes.func.isRequired,
};

ContentBody.propTypes = {
  myResult: PropTypes.shape({
    name: PropTypes.string,
    num: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.string,
    cell: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default App;
