import {useState} from "react"
const ChatInput=()=> {
    const[textarea,setTextArea]=useState(null)
  return (
    <div className="chat-input">
        <textarea onChange={(e)=>{setTextArea(e.target.value)}} value={textarea} name="" id="" cols="30" rows="10"></textarea>
        <button className="secondary-button">Sumbit</button>
    </div>
  )
}

export default ChatInput
