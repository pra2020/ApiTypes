import logo from './logo.svg';
import './App.css';
import Swr from './Swr';
import FetchWithThen from './Examples01/FetchWithThen';
import FetchWithAsyncAwait from './Examples01/FetchWithAsyncAwait';

function App() {
  return (
    <div className="App">
      <FetchWithAsyncAwait/>
      {/* <FetchWithThen/> */}
      {/* <Swr/> */}
    </div>
  );
}

export default App;
