import React from 'react'

const Question1 = () => {
  return (
    <div className="w-full">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Question 1</h2>
          <p className="question-title">Put your question HERE.</p>

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
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>

      
    </div>
    

  )
}

export default Question1