// import './App.css';
import {
  UseState,
  UseReducer,
  UseEffect,
  UseRef,
  UseLayoutEffect,
  UseImperative,
  UseContext,
} from "./hooks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseState />
        <UseReducer />
        <UseEffect />
        <UseRef />
        <UseLayoutEffect />
        <UseImperative />
        <UseContext />
      </header>
    </div>
  );
}

export default App;
