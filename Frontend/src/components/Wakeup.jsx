import 'react'

const Wakeup = () => {
  return (
    <dialog id="wakeup" className="modal">
      <div className="modal-box">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://static.vecteezy.com/system/resources/previews/024/044/219/non_2x/cute-wolf-icon-clipart-transparent-background-free-png.png" />
            </div>
          </div>
          <div className="chat-header">
            StAIve
          </div>
          <div className="chat-bubble">WAKE UP!!!!!</div>
        </div>
      </div>
    </dialog>
  )
}

export default Wakeup