import 'react'
import { PieChart } from '@mui/x-charts';

const Pie = ({stressedTally, happyTally, sadTally, tiredTally}) => {
  return (
    <dialog id="pie" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Distribution of Emotions</h3>
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
        <button>close</button>
      </form>
    </dialog>
  )
}

export default Pie