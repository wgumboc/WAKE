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

  const[progess, setProgress] = useState(0);

  const[save1, setSave1] = useState(false);
  const[save2, setSave2] = useState(false);
  const[save3, setSave3] = useState(false);

  const update = (saveNum) => {
    if (saveNum === "save1" && !save1) {
      setProgress(progress => progress + 25);
      setSave1(true);
    }
    if (saveNum === "save2" && !save2) {
      setProgress(progress => progress + 25);
      setSave2(true);
    } else if (saveNum === "save3" && !save3) {
      setProgress(progress => progress + 25);
      setSave3(true);
    }  
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
        {q2 && <Question2 updateProgress={update}/>}
        {q3 && <Question3 updateProgress={update}/>}
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
