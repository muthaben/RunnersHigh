import '../stylesheet/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar () {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='container__logo'>
          <Link className='runners_High'>Runner's High</Link>
        </div>
        <div className='navbar_link'>
          <Link>러너 모집</Link>
          <Link>글쓰기</Link>
          <Link>채팅하기</Link>
          <Link>로그인</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar
