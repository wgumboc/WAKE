import React, { useState } from 'react'

const Question2 = ({updateProgress}) => {
  return (
    <div className="w-full flex justify-between pt-24">
     
    <div className="flex flex-col mr-20">
      <h2 className="h2 text-base-100 text-center">Question 2</h2>
      <h3 className="h3 text-base-100">In an innovative study, researchers claim to have found a novel way to boost test scores. According to their findings, which of the following unusual strategies can improve a student’s exam performance by up to 20%?</h3>
    </div>


    <div className="w-7/12 card bg-base-100 shadow-xl">

      <div className="form-control">
        <label className="label cursor-pointer pr-10 pt-10">
         <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="option label-text text-primary">Wearing a superhero costume to invoke heroic confidence.</span> 
        </label>
    
        <label className="label cursor-pointer pr-10 pt-10">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="option label-text text-primary"> Taking the test in a room filled with the scent of lavender to reduce exam stress.</span> 
        </label>

        <label className="label cursor-pointer pr-10 pt-10">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="option label-text text-primary">Studying in a room with no windows to minimize distractions.</span> 
        </label>
    
        <label className="label cursor-pointer pr-10 pt-10">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="option label-text text-primary">Reciting positive affirmations in front of a mirror for five minutes before the exam.</span> 
        </label>


        <div className="card-actions justify-end">
          <button className="btn btn-lg btn-warning float-right" onClick={() => updateProgress("save2")}>Save</button>
        </div>
      </div>

    </div>
  </div>

    
  )
}

export default Question2