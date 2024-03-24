import React, {useState} from 'react'

const Question1 = ({updateProgress}) => {

<<<<<<< HEAD
=======
  const[q1, setQ1] = useState(false);

  function update() {
    if (q1 === true) {
      console.log("hi");
    } else {
      updateProgress(25);
      setQ1(true);
    }

  }
>>>>>>> 2fc302bc2376d16196971acb40da5aefb3f430e3

  return (
    <div className="w-full">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="h2">Question 1</h2>
          <h3 className="h3">Put your question HERE.</h3>

          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-1" className="radio checked:radio-primary" checked />
              <span className="label-text">TRUE</span> 
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-1" className="radio checked:radio-primary" checked />
              <span className="label-text">FALSE</span> 
            </label>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => updateProgress("save1")}>Save</button>
          </div>
        </div>
      </div>


      
    </div>
    

  )
}

export default Question1