import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar.jsx";
import './App.css'
import Question1 from './components/Question1.jsx';
import Question2 from './components/Question2.jsx';
import Question3 from './components/Question3.jsx';
import Question4 from './components/Question4.jsx';

function App() {
  const[q1, setQ1] = useState(false);
  const[q2, setQ2] = useState(false);
  const[q3, setQ3] = useState(true);
  const[q4, setQ4] = useState(false);

  const[progess, setProgress] = useState(0)

  const update = (x) => {
    setProgress(x);
    console.log("hello");
  } 


  function selectQ1() {
    setQ1(true);
    setQ2(false);
    setQ3(false);
    setQ4(false);
  }

  function selectQ2() {
    setQ1(false);
    setQ2(true);
    setQ3(false);
    setQ4(false);
  }

  function selectQ3() {
    setQ1(false);
    setQ2(false);
    setQ3(true);
    setQ4(false);
  }

  function selectQ4() {
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(true);
    console.log(q4)
  }

  return (
    <>
      <div className="app-container">
        <Navbar></Navbar>
        {q1 && <Question1 updateProgress={update}/>}
        {q2 && <Question2/>}
        {q3 && <Question3/>}
        {q4 && <Question4/>}
        <progress className="progress progress-secondary w-full" value={progess} max="100">
        </progress>
        <div>
          <div className="join">
            <button onClick={() => selectQ1()}
                    className={q1 === true ? "join-item btn btn-active" : "join-item btn"}>1</button>
            <button onClick={() => selectQ2()}
                    className={q2 === true ? "join-item btn btn-active" : "join-item btn"}>2</button>
            <button onClick={() => selectQ3()}
                    className={q3 === true ? "join-item btn btn-active" : "join-item btn"}>3</button>
            <button onClick={() => selectQ4()}
                    className={q4 === true ? "join-item btn btn-active" : "join-item btn"}>4</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
