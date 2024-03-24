import React, { useState } from 'react'

const Question2 = ({updateProgress}) => {
  return (
    <div className="w-full flex justify-between pt-24">
     
    <div className="flex flex-col">
      <h2 className="h2 text-base-100 text-center">Question 2</h2>
      <h3 className="h3 text-base-100">Choose a word</h3>
    </div>


    <div className="w-7/12 card bg-base-100 shadow-xl">

      <div className="form-control">
        <label className="label cursor-pointer pr-10 pt-10">
         <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="option label-text text-primary">Happiest</span> 
        </label>
    
        <label className="label cursor-pointer pr-10 pt-10">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="option label-text text-primary">Happyier</span> 
        </label>

        <label className="label cursor-pointer pr-10 pt-10">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="option label-text text-primary">Happy</span> 
        </label>
    
        <label className="label cursor-pointer pr-10 pt-10">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="option label-text text-primary">Happyish</span> 
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