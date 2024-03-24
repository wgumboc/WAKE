import { useState } from 'react'
import Navbar from "./components/Navbar.jsx";
import './App.css'
import Question1 from './components/Question1.jsx';
import Question2 from './components/Question2.jsx';
import Question3 from './components/Question3.jsx';
import Cam from './Cam.jsx';
import Question4 from "./components/Question4.jsx";

function App() {
  const[q1, setQ1] = useState(true);
  const[q2, setQ2] = useState(false);
  const[q3, setQ3] = useState(false);
  const[q4, setQ4] = useState(false);
  const[cam, setCam] = useState(false);


  const[progess, setProgress] = useState(0);

  const[save1, setSave1] = useState(false);
  const[save2, setSave2] = useState(false);
  const[save3, setSave3] = useState(false);
  const[save4, setSave4] = useState(false);
  const[isDone, setIsDone] = useState(false);


  const update = (saveNum) => {
    if (saveNum === "save1" && !save1) {
      setProgress(progress => progress + 25);
      setSave1(true);
      checkIfDone();
    } 
    if (saveNum === "save2" && !save2) {
      setProgress(progress => progress + 25);
      setSave2(true);
      checkIfDone();
    } else if (saveNum === "save3" && !save3) {
      setProgress(progress => progress + 25);
      setSave3(true);
      checkIfDone();
    }  else if (saveNum === "save4" && !save4) {
      setProgress(progress => progress + 25);
      setSave4(true);
      checkIfDone();
    }  
    console.log("hello");
  } 

  const checkIfDone = () => {
    if ((save1 && save2 && save3) || 
    (save1 && save2 && save4) || 
    (save1 && save3 && save4) || 
    (save2 && save3 && save4)) {
      setIsDone(true);
    }
  }


  function selectQ1() {
    setQ1(true);
    setQ2(false);
    setQ3(false);
    setQ4(false);
    setCam(false);
  }

  function selectQ2() {
    setQ1(false);
    setQ2(true);
    setQ3(false);
    setQ4(false);
    setCam(false);
  }

  function selectQ3() {
    setQ1(false);
    setQ2(false);
    setQ3(true);
    setQ4(false);
    setCam(false);
  }

  function selectQ4() {
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(true);
    setCam(false);
  }

  function selectCam() {
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(false);
    setCam(true);
  }

  return (
    <div className="containter">
      <div className="app-container">
      <progress className="progress progress-secondary w-full" value={progess} max="100"></progress>
         {/* <Navbar></Navbar> */}
        {q1 && <Question1 updateProgress={update}/>}
        {q2 && <Question2 updateProgress={update}/>}
        {q3 && <Question3 updateProgress={update}/>}
        {q4 && <Question4 updateProgress={update}/>}

 
        {cam && <Cam/>}
        <div className="mt-3 pagination-container flex">
        {isDone && <button className="btn mb-3 ml-6 w-fit btn-lg btn-warning">Submit</button>}

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

        <button onClick={() => selectCam()} className="see-my-face-btn btn w-fit">See my face!</button>

        
      </div>

      

    </div>
  )
}

export default App
