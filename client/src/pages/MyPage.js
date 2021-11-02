import React from 'react'
import '../stylesheet/mypage.css'

function MyPage () {
  return (
    <div className='mypage_container'>
      <div className='mypage_profile'>
        <div>profile </div>
        <div>
          nickname
        </div>
        <div>
          email
        </div>

        <button>프로필수정</button>
      </div>
      <div className='mypage_cards'>
        <div className='mypage_image'>이미지</div>
        <div className='mypage_text'>본문</div>
        <div className='mypage_footer'>
          <span>작성자</span>
          <span>작성일</span>
        </div>
      </div>
      <div className='mypage_cards'>
        <div className='mypage_image'>이미지</div>
        <div className='mypage_text'>본문</div>
        <div className='mypage_footer'>
          <span>작성자</span>
          <span>작성일</span>
        </div>
      </div>
    </div>
  )
}

export default MyPage
