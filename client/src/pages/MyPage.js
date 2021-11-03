import React, { useState } from 'react'
import PostListCard from '../components/PostListCard'
import '../stylesheet/mypage.css'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

function MyPage () {
  const [editProfile, setEditProfile] = useState(false)
  const editHandle = () => {
    setEditProfile(!editProfile)
  }
  return (
    <div className='mypage_container'>
      {editProfile
        ? <div className='mypage_profile'>
          <div className='mypage_profile1'>
            <div className='mypage_myimg'>
              <Avatar
                alt='Remy Sharp'
                src='/static/images/avatar/1.jpg'
                sx={{ width: 116, height: 116 }}
              />
            </div>
          </div>
          <div className='mypage_profile2'>
            <input className='mypage_nickname' placeholder='Nickname' />
            <input className='mypage_email' placeholder='Email' />

            <span className='mypage_confirmEdit'>
              <button onClick={editHandle}>수정완료</button>
              <button>회원탈퇴</button>
            </span>

          </div>
        </div>
        : <div className='mypage_profile'>
          <div className='mypage_profile1'>
            <div className='mypage_myimg'>
              <Avatar
                alt='Remy Sharp'
                src='/static/images/avatar/1.jpg'
                sx={{ width: 116, height: 116 }}
              />
            </div>
          </div>
          <div className='mypage_profile2'>
            <div className='mypage_nickname'>nickname</div>
            <div className='mypage_email'>Email</div>
            <button className='mypage_editbutton' onClick={editHandle}>프로필수정</button>
          </div>
        </div>}

      <div className='mypage_mypost'>
        <PostListCard />
        <PostListCard />
        <PostListCard />
        <PostListCard />
        <PostListCard />
        <PostListCard />
      </div>
      {/* <div className='mypage_nothing'>
        게시글이 없습니다.
      </div> */}
    </div>
  )
}

export default MyPage
