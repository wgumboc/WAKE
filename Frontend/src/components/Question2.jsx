import React from 'react'

const Question2 = ({updateProgress}) => {

  function update() {
    updateProgress(25);
  }

  return (
    <div className="w-full">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Question 2</h2>
          <p className="question-title">Choose a word.</p>
          <div className="form-control">
        <label className="label cursor-pointer">
        <input type="radio" name="radio-10" className="radio radio-primary" checked />
        <span className="label-text">Happiest</span> 
        
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
        <input type="radio" name="radio-10" className="radio radio-primary" />
        <span className="label-text">Happier</span> 
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
        <input type="radio" name="radio-10" className="radio radio-primary" />
        <span className="label-text">Happy</span> 
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
        <input type="radio" name="radio-10" className="radio radio-primary" />
        <span className="label-text">Unhappy</span> 
        </label>
      </div>
          <div className="card-actions justify-end">
          <button className="btn btn-active btn-primary" onClick={update}>Save</button>
          </div>
        </div>
      </div>
</div>
    
  )
}

export default Question2