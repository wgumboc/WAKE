import React from 'react'

const Question2 = () => {
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
        <span className="label-text">Happier</span> 
        <input type="radio" name="radio-10" className="radio radio-primary" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
        <span className="label-text">Happy</span> 
        <input type="radio" name="radio-10" className="radio radio-primary" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
        <span className="label-text">Unhappy</span> 
        <input type="radio" name="radio-10" className="radio radio-primary" />
        </label>
      </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
      
    
  <div className="divider"></div> 
      <button className="btn">Save and Grade</button>
</div>
    
  )
}

export default Question2