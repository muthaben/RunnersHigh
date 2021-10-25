const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const PORT = 80
const controllers = require('./controllers')

app.use(cookieParser())
app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true
  })
)

app.get('/', (req, res) => {
  res.send('hello world')
})
// user
app.post('/login', controllers.login)
app.post('/logout', controllers.logout)
app.post('/signup', controllers.signup)
app.post('/signout', controllers.signout)
app.get('/userinfo', controllers.userinfo)
app.patch('/userinfo/:id', controllers.userinfoedit)

// post
app.get('/posts/user', controllers.mypost)
app.get('/posts', controllers.ourpost)
app.post('/post', controllers.post)
app.patch('/post/:id', controllers.postedit)
app.delete('/posts/:id', controllers.postdelete)

// comment
app.get('/comments/:id', controllers.comments)
app.post('/post/comments', controllers.comment)

app.listen(PORT, () => {
  console.log(`이 서버는 ${PORT}에서 실행중입니다.`)
})
