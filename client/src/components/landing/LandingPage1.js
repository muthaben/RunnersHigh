import '../../stylesheet/landing.css'
import React, { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'

function LandingPage1 () {
  const slides = [
    'https://images.pexels.com/photos/5319384/pexels-photo-5319384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/878151/pexels-photo-878151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/39308/runners-silhouettes-athletes-fitness-39308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1564470/pexels-photo-1564470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  ]

  const [items, setItems] = useState(0)
  const transitions = useTransition(items, {
    key: items,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 }
  })

  useEffect(() => {
    const check = setInterval(() => setItems(state => (state + 1) % slides.length), 4000)
    return () => clearTimeout(check)
  }, [])
  return (
    <div className='landing1_container'>
      {transitions((style, i) => (
        <animated.div
          className='bg'
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`
          }}
        />
      ))}
      <div className='landing1_text'>
        <div className='text1 gs_reveal'>
          Runner's High
        </div>
        <div className='text1 gs_reveal'>
          함께 달리세요.
        </div>
        {/* <div className='text1'>
          달리세요.
        </div> */}
      </div>
    </div>
  )
}

export default LandingPage1

// 함께 뛰어요!
// 의지부족인 사람!
// 달리기를 통해 건강을 되찾고 싶은데 마음대로 안되는 사람!
// 달리기초보, 러닝 어린이들 인사람!

// 함께라면 달릴 수 있어요!

// 러너스 하이 느끼러 가기!
