import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [head, b] = useState([
    "라자 코트 추천",
    "다자 코트 추천",
    "가아 코트 추천",
  ]);

  let [num, count] = useState([0, 0, 0]);
  let [modal, setmodal] = useState(false);

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
      <button
        onClick={() => {
          let copy = [...head];
          copy.sort();
          b(copy);
        }}
      >
        가나다순 정렬
      </button>

      <div className='list'>
        <h4
          onClick={() => {
            setmodal(!modal);
          }}
        >
          {head[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      {head.map(function (a, i) {
        return (
          <div className='list' key={i}>
            <h4>
              {head[i]}
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
        );
      })}

      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  );
}

export default App;
