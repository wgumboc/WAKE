import 'react'
import {PieChart} from "@mui/x-charts";

const CamModal = ({cam,
                  mouthSmileLeft,
                  mouthPucker,
                  eyeSquintLeft,
                  browDownLeft,
                  selectCam,
                  stressedTally,
                  happyTally,
                  sadTally,
                  tiredTally}) => {


    const emotions = [
        {id: 1, emotion: mouthSmileLeft, label: "Happy"},
        {id: 2, emotion: mouthPucker, label: "Sad"},
        {id: 3, emotion: eyeSquintLeft, label: "Tired"},
        {id: 4, emotion: browDownLeft, label: "Stressed"}
    ];

    const emotionBars = emotions.map((emotion) => {
        return (
            <div className="emotion-bar">
                <span className="emotion-label">{emotion.label + ": " + emotion.emotion.toFixed(3)}</span>
                <span className="emotion-color" style={{
                    width: `calc(${emotion.emotion * 100}% - 120px)`
                }}></span>
            </div>
        );
    });

    return (
        <div className="see-my-face-btn cam">
            <button className="btn" onClick={()=> {
                selectCam()
            }}>Diagnostics</button>
            <dialog id="cam-modal" className="modal">
                <div className="modal-box">
                    <video hidden={!cam} className='camera-feed' id="video" autoPlay></video>
                    <div>
                        {
                            emotions.map(emotion =>
                                    <div className="emotion-bar">
                                        <span className="emotion-label">{emotion.label + ": " + emotion.emotion.toFixed(3)}</span>
                                        <span className="emotion-color" style={{
                                            width: `calc(${emotion.emotion * 100}% - 120px)`
                                        }}></span>
                                    </div>)
                        }
                    </div>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: stressedTally, label: 'Stressed' },
                                    { id: 1, value: happyTally, label: 'Happy' },
                                    { id: 2, value: sadTally, label: 'Sad' },
                                    { id: 3, value: tiredTally, label: 'Tired' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={() => {selectCam()}}>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default CamModal