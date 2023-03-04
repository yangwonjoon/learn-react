import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [head, b] = useState([
    "여자 코트 추천",
    "남자 코트 추천",
    "유아 코트 추천",
  ]);

  let [num, count] = useState(0);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>React Blog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...head];
          copy[0] = "남자 코트 추천";
          b(copy);
        }}
      >
        글자 변경
      </button>
      <div className='list'>
        <h4>
          {head[0]}
          <span
            onClick={() => {
              count(num + 1);
            }}
          >
            👍
          </span>
          {num}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{head[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{head[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
