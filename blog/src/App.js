import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [head, sethead] = useState(["여자 코트 추천", "남자 코트 추천", "유아 코트 추천",]);
  let [num, setnum] = useState([0, 0, 0]);
  let [modal, setmodal] = useState(false);
  let [modalTitle,setmodalTitle] = useState(0);
  let [input, setinput] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>React Blog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...head];          
          copy[0] = "남자 코트 추천";
          sethead(copy);
        }}
      >
        글자 변경
      </button>
      <button
        onClick={() => { let copy = [...head]; copy.sort(); sethead(copy);}}
      >
        가나다순 정렬
      </button>

      {head.map(function (a, i) {
        return (
          <div className='list' key={i}>
            <h4 onClick={() => { setmodal(!modal); setmodalTitle(i); }}>
              {head[i]}
              <span
                onClick={(e) => {
                  let copy = [...num];
                  copy[i] = copy[i] + 1;
                  setnum(copy);
                  e.stopPropagation();
                }}>
                👍
              </span>
              {num[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button onClick={()=>{
              let copy = [...head];
              copy.splice(i,1);
              sethead(copy);
            }}>삭제</button>
          </div>
        );
      })}

      <input value={input} onChange={(e) => { setinput(e.target.value);}}></input>
      <button onClick={(e) => {sethead(head => [...head, input]); setinput(""); setnum(num => [...num, 0])}}>추가</button>
      

      {modal == true ? <Modal modalTitle={modalTitle} sethead={sethead} head={head} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.head[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={() => { }}>수정</button>
    </div>
  );
}

export default App;
