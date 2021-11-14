import React from 'react'
import '../stylesheet/footer.css'
function Footer () {
  return (
    <div className='footer'>
      <div className='container_footer'>
        <div className='container_logo_footer'>
          <div className='runners_High_footer'>Runner's High</div>
        </div>
        <div className='navbar_link_footer_ourservice'>
          <div className='footer_title'>Our service</div>
          <a href='https://github.com/codestates/RunnersHigh/wiki' target='_blank' rel="noreferrer">Wiki</a>
          <a href='https://github.com/codestates/RunnersHigh' target='_blank' rel="noreferrer">Github</a>
        </div>
        <div className='navbar_link_footer_adress'>
          <div className='footer_title'>Github Adress</div>
          <span>

            <a href='https://github.com/kimbro97' target='_blank' rel="noreferrer">김형재</a>
            <a href='https://github.com/muthaben' target='_blank' rel="noreferrer">김왕선</a>
          </span>
          <span>

            <a href='https://github.com/Sungrinhan' target='_blank' rel="noreferrer">한성린</a>
            <a href='https://github.com/gyuhwanglee' target='_blank' rel="noreferrer">이규황</a>
          </span>
        </div>

      </div>
      <div className='copyright'> © Copyright 2021 Runner’s High Inc. All rights reserved. </div>
    </div>
  )
}

export default Footer
