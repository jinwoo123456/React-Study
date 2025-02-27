//라우터 처리를 위한 임포트
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./components/board/List";
import View from "./components/board/View";
import Write from "./components/board/Write";
import NotFound from "./components/NotFound";

/*라우터 처리를 위한 BrowserRouter 컴포넌트는 App컴포넌트를
감싸는 형식으로 사용한다.  */
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* 첫 진입시에는 게시판의 목록을 랜더링한다. */}
            <Route path="/" element={<List />} />
            <Route path="/list" element={<List />} />
            <Route path="/view" element={<View />} />
            <Route path="/write" element={<Write />} />
            {/* 앞에서 설정한 경로외에는 모두 404NotFount 컴포넌트 랜더링. */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
