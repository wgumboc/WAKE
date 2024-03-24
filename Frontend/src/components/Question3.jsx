import React, {useState} from 'react'
import '.././App.css'

const Question3 = ({updateProgress}) => {
  // const[q3, saveQ3] = useState(false);

  // function update() {
  //   if (q3 === true) {
  //     console.log("hi");
  //   } else {
  //     updateProgress(25);
  //     saveQ3(true);
  //   }
  // }

  return (
    <div className="w-full">


      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
        <h2 className="h2"> Question 3</h2>
        <h3 className="h3">This is the question</h3>
        <textarea className="textarea textarea-bordered w-full" placeholder="Answer question here"></textarea>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => updateProgress("save3")}>Save</button>
          </div>
        </div>
        </div>
    </div>
    
  )
}

export default Question3