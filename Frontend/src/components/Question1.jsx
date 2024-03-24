import {useState} from 'react'

const Question1 = ({updateProgress, mouthPucker}) => {

  // const [state, setState] = useState(1);

  // function mouseOver() {
  //   if (state === 1) {
  //     setState((prevVal) => (prevVal += 1));
  //   } else if (state === 2) {
  //     setState((prevVal) => (prevVal += 1));
  //   } else if (state === 3) {
  //     setState((prevVal) => (prevVal -= 2));
  //   }
  // }

  // let mystyle = {
  //   left: state === 1 ? "0px" : state === 2 ? "200px" : state === 3 ? "450px" : "",
  //
  //   position: 1 < 8 && "absolute",
  // };

  return (
    <div className="w-full flex justify-between pt-24">
     

        <div className="flex flex-col mr-20">
          <h2 className="h2 text-base-100 text-center">Question 1</h2>
          <h3 className="h3 text-base-100">Researchers have found that students who wear yellow socks during exams score 10% higher on average, due to yellow's mood-boosting effects that enhance cognitive performance.</h3>
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
    

            <div className="card-actions justify-end" id="save1">
              {/*<button className="btn btn-lg btn-warning float-right"*/}
              {/*        onClick={() => updateProgress("save1")}*/}
              {/*        onMouseOver={mouseOver}*/}
              {/*        style={mystyle}>Save</button>*/}
              <button className="btn btn-lg btn-warning float-right"
                      onClick={() => updateProgress("save1")}>Save</button>
            </div>
          </div>
          </div>
        </div>



  )
}

export default Question1