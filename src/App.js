import logo from "./logo.svg";
import "./App.css";
import Swr from "./Examples02/Swr";
import FetchWithThen from "./Examples01/FetchWithThen";
import FetchWithAsyncAwait from "./Examples01/FetchWithAsyncAwait";
import Axios from "./Examples01/Axios";
import SwrLib from "./Examples01/SwrLib";
import { Suspense } from "react";
import ReactQuery from "./Examples01/ReactQuery";

function App() {
  return (
    <div className="App">
      {/* <Axios /> */}
      {/* <FetchWithAsyncAwait/> */}
      {/* <FetchWithThen/> */}
      {/* <Swr/> */}
        {/* fallback in Suspense react will render the content if data is not loaded/ error */}
      {/* <Suspense fallback={<h1>Loading.....</h1>}>
      <SwrLib/>
      </Suspense> */}
      <ReactQuery/>
    </div>
  );
}

export default App;
