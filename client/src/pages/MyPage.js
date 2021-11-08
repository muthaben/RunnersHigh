import React, { useState } from 'react'
import PostListCard from '../components/PostListCard'
import '../stylesheet/mypage.css'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import '../stylesheet/signup.scss'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
function MyPage () {
  const [editProfile, setEditProfile] = useState(false)
  const editHandle = () => {
    setEditProfile(!editProfile)
  }
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm({ mode: 'onChange' })
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
            <TextField
              margin='normal'
              required
              fullWidth
              id='nickname'
              label='Nickname'
              name='nickname'
              {...register('nickname', {
                required: '닉네임을 입력해주세요.',
                maxLength: {
                  value: 10,
                  message: '10자 미만으로 설정해주세요.'
                }
              })}
            />
            {errors.nickname && <p>{errors.nickname.message}</p>}
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
                minLength: {
                  value: 6,
                  message: '비밀번호는 최소 6자 이상입니다.'
                }
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <TextField
              margin='normal'
              required
              fullWidth
              name='confirm_password'
              label='Confirm Password'
              type='password'
              id='confirm_password'
              {...register('confirm_password', {
                required: '비밀번호를 다시 입력해주세요.',
                validate: (value) =>
                  value === watch('password') || '비밀번호가 일치하지 않습니다'
              })}
            />
            {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
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

      <div className='mypage_mypost' />
      {/* <div className='mypage_nothing'>
        게시글이 없습니다.
      </div> */}
    </div>
  )
}

export default MyPage
