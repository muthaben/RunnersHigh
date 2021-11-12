import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter
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

import LoginModal from './components/LoginModal'
import { useSelector, useDispatch } from 'react-redux'
import { setIsLogin } from './redux/action'

function App () {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const OpenModal = () => {
    setShowModal(!showModal)
  }
  const userInfo = useSelector((state) => state.userReducer)
  const { isLogin, userinfo } = userInfo
  const postInfo = useSelector((state) => state.postReducer)
  const [chatList, setChatList] = useState([]) // axios get
  const { posts, post } = postInfo
  console.log(chatList)
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
          setChatList={setChatList}
        />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/main' exact component={MainPage} />
          <Route path='/create' exact component={CreatePost} />
          <Route
            exact
            path='/editpost'
            render={() => <EditPost post={post} userinfo={userinfo} />}
          />
          <Route
            exact
            path='/detailpost'
            render={() => <DetailPost post={post} userinfo={userinfo} isLogin={isLogin} OpenModal={OpenModal} />}
          />

          <Route path='/loginmodal' exact component={LoginModal} />
          <Route path='/chat' exact render={() => <Chat chatList={chatList} setChatList={setChatList} userinfo={userinfo} />} />
          <Route
            exact
            path='/mypage'
            render={() => <MyPage userinfo={userinfo} posts={posts} />}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
