import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage5 = () => {
  return (
    <div className='landing5_wrap'>
      <div className='landing5_container'>
        {/* <img src={require('../../stylesheet/image/man.png').default} /> */}
        <div>
          <div className='landing5_content'>
            러너를 클릭해주세요
          </div>
          <div className='section'>

            <Link to='/main' className='run'>

              {/* <!-- 몸전체 이미지 --> */}
              <img src={require('../../stylesheet/image/man.png').default} />

              {/* <!-- 팔 --> */}
              <div className='hand1'>
                <img src={require('../../stylesheet/image/hand1.png').default} />
              </div>

              <div className='hand2'>
                <img src={require('../../stylesheet/image/hand2.png').default} />
              </div>

              {/* <!-- 다리 --> */}
              <div className='foot1-1'>
                <img src={require('../../stylesheet/image/foot1-1.png').default} />
                <div className='foot1-2'>
                  <img src={require('../../stylesheet/image/foot1-2.png').default} />
                  <div className='foot1-3'>
                    <img src={require('../../stylesheet/image/foot1-3.png').default} />
                  </div>
                </div>
              </div>

              <div className='foot2-1'>
                <img src={require('../../stylesheet/image/foot2-1.png').default} />
                <div className='foot2-2'>
                  <img src={require('../../stylesheet/image/foot2-2.png').default} />
                  <div className='foot2-3'>
                    <img src={require('../../stylesheet/image/foot2-3.png').default} />
                  </div>
                </div>
              </div>

            </Link>
          </div>

        </div>

        {/* <div className='landing5_text'>
          <div className='landing5_comment1'>
            Runner's High에서
          </div>
          <div className='landing5_comment1'>
            함께 달릴 준비 되셨나요?
          </div>
          <button>Let's get it</button>
        </div> */}
      </div>
    </div>
  )
}

export default LandingPage5
