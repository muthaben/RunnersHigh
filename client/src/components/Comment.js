import React from 'react'
import '../stylesheet/comment.css'
import Avatar from '@mui/material/Avatar'
// import Footer from './Footer'
function comment ({ comment }) {
  return (
    <div className='comment_container'>
      <section className='comment_section'>
        <div className='comment_emoticon'>
          <Avatar 
          src={comment.user.image_url} 
          sx={{ width: 80, height: 80 }}
          />
          <span>{comment.user.nickname}</span>
        </div>
        <div className='comment_comment'>{comment.comment}~</div>
      </section>
    </div>
  )
}

export default comment
