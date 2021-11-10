import React from 'react'
import '../stylesheet/comment.css'
// import Footer from './Footer'
function comment ({ comment }) {
  return (
    <div className='comment_container'>

      <section className='comment_section'>
        <div className='comment_emoticon'>
          <img src={comment.user.image_url} />
          <span>{comment.user.nickname}</span>
        </div>
        <div className='comment_comment'>{comment.comment}~</div>
      </section>
    </div>
  )
}

export default comment
