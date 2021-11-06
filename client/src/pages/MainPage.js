import React from 'react'
import PostListCard from '../components/PostListCard'
import '../stylesheet/mainpage.css'
import Footer from '../components/Footer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

function MainPage () {
  gsap.registerPlugin(ScrollTrigger)

  let scrollTween

  function goToSection (i) {
    scrollTween = gsap.to(window, {
      scrollTo: { y: i * window.innerHeight, autoKill: false },
      duration: 1,
      onComplete: () => scrollTween = null,
      overwrite: true
    })
  }

  gsap.utils.toArray('.panel').forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: 'top bottom',
      end: '+=200%',
      onToggle: self => self.isActive && !scrollTween && goToSection(i)
    })
  })

  return (
    <>
      <div className='main_container'>
        {/* <div className='main_serch_div'>
          <input type='text' className='main_serch' placeholder='serch' />
          <button>검색</button>
        </div> */}
        <div className='main_section1 panel'>
          <PostListCard />
        </div>
        <section className='main_section2 panel'>
          <PostListCard />
        </section>
        <section className='main_section3 panel'>
          <PostListCard />
        </section>
        <section className='main_section4 panel'>
          <PostListCard />
        </section>

      </div>
      <Footer />
    </>
  )
}

export default MainPage
