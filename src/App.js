import logo from "./logo.svg";
import "./App.css";
import Swr from "./Swr";
import FetchWithThen from "./Examples01/FetchWithThen";
import FetchWithAsyncAwait from "./Examples01/FetchWithAsyncAwait";
import Axios from "./Examples01/Axios";

function App() {
  return (
    <div className="App">
      <Axios />
      {/* <FetchWithAsyncAwait/> */}
      {/* <FetchWithThen/> */}
      {/* <Swr/> */}
    </div>
  );
}

export default App;
