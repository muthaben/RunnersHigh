import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import Footer from '../components/Footer'
import LandingPage1 from '../components/landing/LandingPage1'
import LandingPage2 from '../components/landing/LandingPage2'
import LandingPage3 from '../components/landing/LandingPage3'
import LandingPage4 from '../components/landing/LandingPage4'
import LandingPage5 from '../components/landing/LandingPage5'

function Home () {
  function animateFrom (elem, direction) {
    direction = direction || 1
    let x = 0
    let y = direction * 100
    if (elem.classList.contains('gs_reveal_fromLeft')) {
      x = -500
      y = 0
    } else if (elem.classList.contains('gs_reveal_fromRight')) {
      x = 500
      y = 0
    }
    elem.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
    elem.style.opacity = '0'
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto'
    })
  }

  function hide (elem) {
    gsap.set(elem, { autoAlpha: 0 })
  }

  document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
      hide(elem) // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () { animateFrom(elem) },
        onEnterBack: function () { animateFrom(elem, -1) },
        onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
      })
    })
  })
  return (
    <div>
      {/* <h1>Home</h1> */}
      <LandingPage1 />
      <LandingPage2 />
      <LandingPage3 />
      <LandingPage4 />
      <LandingPage5 />
      <Footer />
    </div>
  )
}

export default Home
