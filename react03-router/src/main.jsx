import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  /**
   * 라우터 설정을 위해 최상위 컴포넌트인 App을 BrowserRouter 컴포넌트로
   * 랩핑한다. 이 설정은 App.jsx에서도 동일하게 할 수 있다.
   */
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
