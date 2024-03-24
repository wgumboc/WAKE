import React, {useState} from 'react'

const Question1 = ({updateProgress}) => {
  return (
    <div className="w-full flex justify-between pt-24">
     

        <div className="flex flex-col">
          <h2 className="h2 text-base-100 text-center">Question 1</h2>
          <h3 className="h3 text-base-100">What is the answer?</h3>
        </div>


        <div className="w-7/12 card bg-base-100 shadow-xl">

          <div className="form-control">
            <label className="label cursor-pointer pr-10 pt-10">
              <input type="radio" name="radio-1" className="radio radio-primary" />
              <span className="option label-text text-primary">True</span> 
            </label>
        
            <label className="label cursor-pointer pr-10 pt-10">
              <input type="radio" name="radio-1" className="radio radio-primary" />
              <span className="option label-text text-primary">False</span> 
            </label>
    

            <div className="card-actions justify-end">
              <button className="btn btn-lg btn-warning float-right" onClick={() => updateProgress("save1")}>Save</button>
            </div>
          </div>
          </div>
        </div>



  )
}

export default Question1