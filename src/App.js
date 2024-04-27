import logo from "./logo.svg";
import "./App.css";
import Swr from "./Examples02/Swr";
import FetchWithThen from "./Examples01/FetchWithThen";
import FetchWithAsyncAwait from "./Examples01/FetchWithAsyncAwait";
import Axios from "./Examples01/Axios";
import SwrLib from "./Examples01/SwrLib";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      {/* <Axios /> */}
      {/* <FetchWithAsyncAwait/> */}
      {/* <FetchWithThen/> */}
      {/* <Swr/> */}
      <Suspense fallback={<h1>Loading.....</h1>}>
        {/* fallback in Suspense react will render the content if data is not loaded/ error */}
      <SwrLib/>
      </Suspense>
    </div>
  );
}

export default App;
