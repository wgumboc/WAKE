import React from 'react'


const Question3 = () => {
  return (
    <div className="w-full flex justify-between pt-24"> 

      <div className="flex flex-col">
        <h2 className="h2 text-base-100 text-center"> Question 3</h2>
        <h3 className="h3 text-base-100">This is the question</h3>
      </div>

      <div className="w-7/12 card-height card bg-base-100 shadow-xl">
        <div className="card-body">
          <textarea className="textarea textarea-bordered w-full min-h-80" placeholder="Answer question here"></textarea>
          <div className="card-actions justify-end">
            <button className="btn btn-lg btn-warning">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question3