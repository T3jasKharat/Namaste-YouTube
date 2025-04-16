import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRndomMessage } from '../utils/helper'

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('')
  const dispatch = useDispatch();
  const chatMessages = useSelector(store => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRndomMessage(20),
      }))
    }, 1500)

    return () => clearInterval(i);
  }, [])
  return (
    <>
      <div className='ml-2 w-full h-[500px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((chatMessage, index) => <ChatMessage key={index} name={chatMessage.name} message={chatMessage.message} />)}
      </div>
      <form className='p-2 ml-2 w-full border border-black' onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage({
          name: 'Akshay',
          message: liveMessage,
        }))
        setLiveMessage('')
      }}>
        <input className='w-3/4' type='text' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
        <button className='px-2 bg-green-400 w-1/4'>Submit</button>
      </form>
    </>
  )
}

export default LiveChat
