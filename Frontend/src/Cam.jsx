import {useEffect, useState} from 'react';
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

// Code adapted from https://developers.google.com/mediapipe/solutions/vision/face_landmarker/web_js#video
// And adapted from example at https://codepen.io/mediapipe-preview/pen/OJBVQJm


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

const Cam = () => {

  const [mouthSmileLeft, setMouthSmileLeft] = useState(0);
  const [mouthPucker, setMouthPucker] = useState(0);
  const [eyeSquintLeft, setEyeSquintLeft] = useState(0);

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
    setup();
  }, []);

  return (
    <div className="App">
      <video className='camera-feed' id="video" autoPlay></video>
      <div>{"Smiling: " + mouthSmileLeft.toFixed(3)}</div>
      <div>{"Sad: " + mouthPucker.toFixed(3)}</div>
      <div>{"Tired: " + eyeSquintLeft.toFixed(3)}</div>
      {eyeSquintLeft > 0.6 && <div className="asleep">WAKE UP</div>}
    </div>
  );
}

export default Cam;