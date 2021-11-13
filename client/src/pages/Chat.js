import '../stylesheet/chat.scss'
import io from 'socket.io-client'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Avatar from '@mui/material/Avatar'
function Chat ({ chatList, setChatList, userinfo }) {
  const socketRef = useRef()
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  //  console.log(scrollToBottom())
  useEffect(() => {
    scrollToBottom()
  }, [chatList]);


  useEffect(() => {
    socketRef.current = io.connect(`${process.env.REACT_APP_API_URL}`)
    socketRef.current.on('message', (data) => {
      console.log(data)
      setChatList([...chatList, { chat: data.chat, user: { nickname: data.userinfo.nickname, image_url: data.userinfo.image_url } }])
    })
    return () => socketRef.current.disconnect()
  }, [chatList])
  const [input, setInput] = useState('')
  const inputHandle = (e) => {
    setInput(e.target.value)
  }
  const render = () => {
    return (
      chatList.map((el, idx) =>
        <div className='chat_room_detail' key={idx}>
           <div className='chat_room_image'>
           <Avatar
                alt='Remy Sharp'
                src={userinfo.image_url}
                sx={{ width: 25, height: 25 }}
              />
         <span> {el.user.nickname} </span>
         </div>
          <div className='chat_room_text'>{el.chat} </div>
          <div ref={messagesEndRef} ></div>
        </div>
      )
    )
  }
  const sendMsg = () => {
   
    socketRef.current.emit('message', { chat: input, userinfo: userinfo })
    axios.post(`${process.env.REACT_APP_API_URL}/chat/message`,
      { chat: input },
      {
        headers: {
          Authorization: `Bearer ${localStorage.accessToken}`
        }
      })
    setInput('')
  }
  const enterClick= (e) => {
    if(e.key === 'Enter') {
      sendMsg()
    }
  }

  return (
  
    <div className='chat_container'>
      <div  className='chat_container2'>
        <div className='chat_room'>
          <div  className='chat_room_show'>
            {render()}
          </div> 
        
          <div className='chat_room_post'>
            <input 
            type='text'
            placeholder='채팅을 시작하세요' 
            onChange={inputHandle} 
            value={input} 
            onFocus
            onKeyPress={enterClick}
            />
            <button type='submit' onClick={sendMsg}>전송</button>
          </div>
        </div>
      </div>
      
    </div>
   
  )
}

export default Chat
