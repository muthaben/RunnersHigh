import React from 'react'
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
import Login from './pages/Login'
import MainPage from './pages/MainPage'
import MyPage from './pages/MyPage'
import EditMyPage from './pages/EditMyPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DetailEditPost from './pages/DetailEditPost'
function App () {
  console.log('hello')

  return (
    <div className='page_container'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/main' exact component={MainPage} />
          <Route path='/create' exact component={CreatePost} />
          <Route path='/editpost' exact component={EditPost} />
          <Route path='/detail' exact component={DetailPost} />
          <Route path='/detailedit' exact component={DetailEditPost} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App
