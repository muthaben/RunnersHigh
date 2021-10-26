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
function App () {
  console.log('hello')

  return (
    <>
      <div className='page_container'>
        <Router className='wrep_container'>
          <Navbar />

        </Router>
      </div>
      <Footer />
    </>
  )
}

export default App
