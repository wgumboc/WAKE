import React, {useState} from 'react'

const Question3 = ({updateProgress}) => {
  return (
    <div className="w-full flex justify-between pt-24"> 

      <div className="flex flex-col mr-20">
        <h2 className="h2 text-base-100 text-center"> Question 3</h2>
        <h3 className="h3 text-base-100">If you had the power to create a new tradition for students around the world to help manage emotions during exam season, what would it be? Think about rituals, activities, or even mythical creatures involved that could make studying more enjoyable and less stressful.</h3>
      </div>

      <div className="w-7/12 card-height card bg-base-100 shadow-xl">
        <div className="card-body">
          <textarea className="textarea textarea-bordered w-full min-h-60" placeholder="Answer question here"></textarea>
          <div className="card-actions justify-end">
            <button className="btn btn-lg btn-warning" onClick={() => updateProgress("save3")}>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question3