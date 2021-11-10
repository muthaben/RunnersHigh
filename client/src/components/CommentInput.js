import axios from 'axios'
import React, { useState } from 'react'

function CommentInput ({ getComments, userinfo, post }) {
// comment: req.body.comment,
// userId: accessTokenData.id,
// postId: req.params.postid
  const [inputComment, setInputComment] = useState('')
  const writeComment = (e) => {
    setInputComment(e.target.value)
  }

  const onSubmit = () => {
    axios.post(`http://localhost:80/posts/comment/${post.id}`, { comment: inputComment }, {
      headers: {
        Authorization: `Bearer ${localStorage.accessToken}`,
        'Content-Type': 'application/json'

      }
    })
      .then((data) => {
        console.log(data)
        getComments()
        setInputComment('')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <div className='comment_div'>
        <input className='comment_input' placeholder='댓글을 입력하세요' value={inputComment} onChange={writeComment} />
        <button className='comment_submit' onClick={onSubmit}>입력</button>
      </div>
    </div>
  )
}

export default CommentInput
