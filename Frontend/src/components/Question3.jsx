import React from 'react'
import '.././App.css'

const Question3 = () => {
  return (
    <div className="w-full">


      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
        <h2 className="h2"> Question 3</h2>
        <h3 className="h3">This is the question</h3>
        <textarea className="textarea textarea-bordered w-full" placeholder="Answer question here"></textarea>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
        </div>
    </div>
    
  )
}

export default Question3