import {useEffect, useRef, useState} from 'react'
import './App.css'
import Question1 from './components/Question1.jsx';
import Question2 from './components/Question2.jsx';
import Question3 from './components/Question3.jsx';
import Cam from './Cam.jsx';
import Question4 from "./components/Question4.jsx";
import {FaceLandmarker, FilesetResolver} from "@mediapipe/tasks-vision";



let video;
let faceLandmarker;
let lastVideoTime = -1;
let blendshapes = [];

const options = {
  baseOptions: {
    modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
    delegate: "GPU"
  },
  numFaces: 1,
  runningMode: "VIDEO",
  outputFaceBlendshapes: true,
  outputFacialTransformationMatrixes: true,
}

function App() {

  let initAudio = () => {
    const targetAudio = document.getElementsByClassName("audioBtn")[0];
    targetAudio.play();
  }

  let pauseAudio = () => {
    const targetAudio = document.getElementsByClassName("audioBtn")[0];
    targetAudio.pause();
  }

  const[q1, setQ1] = useState(true);
  const[q2, setQ2] = useState(false);
  const[q3, setQ3] = useState(false);
  const[q4, setQ4] = useState(false);


  const[progess, setProgress] = useState(0);

  const[save1, setSave1] = useState(false);
  const[save2, setSave2] = useState(false);
  const[save3, setSave3] = useState(false);
  const[save4, setSave4] = useState(false);
  const[isDone, setIsDone] = useState(false);


  const[cam, showHideCam] = useState(false);

  const [mouthSmileLeft, setMouthSmileLeft] = useState(0);
  const [mouthPucker, setMouthPucker] = useState(0);
  const [eyeSquintLeft, setEyeSquintLeft] = useState(0);

  const[isSetUp, setIsSetUp] = useState(false);

  const setup = async () => {
    const filesetResolver = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");
    faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, options);

    // video = document.getElementById("video") as HTMLVideoElement;
    video = document.getElementById("video");
    navigator.mediaDevices.getUserMedia({
      video: { width: 640, height: 360 },
      audio: false,
    }).then(function (stream) {
      video.srcObject = stream;
      video.addEventListener("loadeddata", predict);
    });
  }

  const predict = async () => {
    let nowInMs = Date.now();
    if (lastVideoTime !== video.currentTime) {
      lastVideoTime = video.currentTime;
      const faceLandmarkerResult = faceLandmarker.detectForVideo(video, nowInMs);

      if (faceLandmarkerResult.faceBlendshapes && faceLandmarkerResult.faceBlendshapes.length > 0 && faceLandmarkerResult.faceBlendshapes[0].categories) {
        blendshapes = faceLandmarkerResult.faceBlendshapes[0].categories;
        updateEmotions(blendshapes);
      }
    }

    window.requestAnimationFrame(predict);
  }

  const updateEmotions = (blendshapes) => {
    blendshapes.forEach(shape => {
      if (shape.categoryName === "mouthSmileLeft") {
        setMouthSmileLeft(shape.score)
      }

      if (shape.categoryName === "mouthPucker") {
        setMouthPucker(shape.score)
      }

      if (shape.categoryName === "eyeSquintLeft") {
        setEyeSquintLeft(shape.score)
      }
    })
  }

  useEffect(() => {
    if (!isSetUp) {
      setup();
      setIsSetUp(true)
    }

    if (eyeSquintLeft > 0.6) {
      initAudio();
    } else {
      pauseAudio();
    }
  }, [eyeSquintLeft, isSetUp]);

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
    showHideCam(false);
  }

  function selectQ2() {
    setQ1(false);
    setQ2(true);
    setQ3(false);
    setQ4(false);
    showHideCam(false);
  }

  function selectQ3() {
    setQ1(false);
    setQ2(false);
    setQ3(true);
    setQ4(false);
    showHideCam(false);
  }

  function selectQ4() {
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(true);
    showHideCam(false);
  }

  function selectCam() {
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(false);
    showHideCam(true);
  }

  return (
    <div className="containter">
      <div className="app-container">
        <progress className="progress progress-secondary w-full" value={progess} max="100"></progress>
        {q1 && <Question1 updateProgress={update} mouthPucker={mouthPucker}/>}
        {q2 && <Question2 updateProgress={update}/>}
        {q3 && <Question3 updateProgress={update}/>}
        {q4 && <Question4 updateProgress={update}/>}

        {cam && <Cam/>}

        {/*Camera Component*/}
        <audio className="audioBtn">
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></source>
        </audio>
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

        <div className="see-my-face-btn cam">
            <video hidden={!cam} className='camera-feed' id="video" autoPlay></video>
            <div>{"Smiling: " + mouthSmileLeft.toFixed(3)}</div>
            <div>{"Sad: " + mouthPucker.toFixed(3)}</div>
            <div>{"Tired: " + eyeSquintLeft.toFixed(3)}</div>
            {eyeSquintLeft > 0.6 && <div className="asleep">WAKE UP</div>}

            <button onClick={() => selectCam()} className="btn w-fit">See my face!</button>
        </div>
      </div>
    </div>
  )
}

export default App
