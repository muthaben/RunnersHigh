import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Chat from './pages/Chat'
import CreatePost from './pages/CreatePost'
import DetailPost from './pages/DetailPost'
import EditPost from './pages/EditPost'
import Home from './pages/Home'
import MainPage from './pages/MainPage'
import MyPage from './pages/MyPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DetailEditPost from './pages/DetailEditPost'
import LoginModal from './components/LoginModal'
import { useSelector } from 'react-redux'

function App () {
  const [showModal, setShowModal] = useState(false)
  const OpenModal = () => {
    setShowModal(!showModal)
  }
  const userInfo = useSelector((state) => state.userReducer)
  const { isLogin, userinfo } = userInfo
  return (
    <div className='page_container'>
      <Router>
        <LoginModal
          showModal={showModal}
          OpenModal={OpenModal}
          isLogin={isLogin}
        />
        <Navbar
          OpenModal={OpenModal}
          isLogin={isLogin}
          userinfo={userinfo}
        />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/main' exact component={MainPage} />
          <Route path='/create' exact component={CreatePost} />
          <Route path='/editpost' exact component={EditPost} />
          <Route path='/detail' exact component={DetailPost} />
          <Route path='/detailedit' exact component={DetailEditPost} />
          <Route path='/loginmodal' exact component={LoginModal} />
          <Route path='/chat' exact component={Chat} />
          <Route path='/mypage' exact component={MyPage} />

        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App
