import '../stylesheet/chat.scss'
import io from 'socket.io-client'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
function Chat ({ chatList, setChatList, userinfo }) {
  console.log(userinfo)
  const socketRef = useRef()
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
          <div className='chat_room_image'>이미지<span> {el.user.nickname} </span></div>
          <div className='chat_room_text'>{el.chat} </div>
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
  return (
    <div className='chat_container'>
      <div className='chat_container2'>
        <div className='chat_sidebar'>
          <div> 이미지 </div>
          <div> 이미지 </div>
        </div>
        <div className='chat_room'>
          <div className='chat_room_show'>
            {render()}
          </div>
          <div className='chat_room_post'>
            <input placeholder='채팅을 시작하세요' onChange={inputHandle} value={input} />
            <button onClick={sendMsg}>전송</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
