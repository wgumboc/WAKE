const Question4 = ({ updateProgress }) => {
  return (
    <div className="w-full flex justify-between pt-24"> 

      <div className="flex flex-col">
        <h2 className="h2 text-base-100 text-center"> Question 4</h2>
        <h3 className="h3 text-base-100">Fill in the missing answer!</h3>
      </div>

      <div className="w-7/12 card bg-base-100 shadow-xl">
        <div className="card-body flex">
          <div className="flex-grow text-left">
            <p className="para-text text-primary">During exam season, students participate in  <input type="text" placeholder="blank" className="input input-bordered w-24" />  Therapy sessions to help manage stress and improve focus.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-lg btn-warning" onClick={() => updateProgress("save4")}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question4;
