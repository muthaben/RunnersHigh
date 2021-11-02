import React from 'react'
import '../../stylesheet/landing.css'

const LandingPage2 = () => {
  return (
    <>
      <div className='landing_container '>
        <img className='gs_reveal gs_reveal_fromRight' src='https://image.freepik.com/free-vector/mobile-marketing-concept_23-2148642675.jpg' />
        <div className='landing_text'>
          <div className='landing_comment1 gs_reveal'>
            러닝메이트를 모집하세요
          </div>
          <div className='landing_comment2 gs_reveal'>
            게시물을 올려서 마음에 맞는사람들끼리
          </div>
          <div className='landing_comment2 gs_reveal'>
            지역에 맞는 사람들끼리 달려보세요.
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------------- */}
      <div className='landing2_container'>

        <div className='landing2_text'>
          <div className='landing2_comment1 gs_reveal'>
            체력이 부족한 당신!
          </div>
          <div className='landing2_comment1 gs_reveal'>
            혼자서는 힘들고,  마음대로 안되는 사람!
          </div>
          <div className='landing2_comment1 gs_reveal'>
            달리기초보, 러닝 어린이들 인사람!
          </div>
          <div className='landing2_comment2 gs_reveal'>
            함께라면 달릴 수 있어요!
          </div>
        </div>
        <img className='gs_reveal gs_reveal_fromLeft' src='https://image.freepik.com/free-vector/tired-employee-exhausted-with-work_74855-4820.jpg' />
      </div>
    </>
  )
}

export default LandingPage2
