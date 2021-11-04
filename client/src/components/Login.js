import '../stylesheet/login.scss'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { setUserinfo } from '../redux/action'
import { withRouter } from 'react-router-dom'
const Login = ({ ChangeSelect }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit
  } = useForm({ mode: 'onChange' })

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    console.log('11111111111', data)
    axios.post('http://localhost:80/users/login', {
      email: data.email,
      password: data.password
    }, {
      'Content-Type': 'application/json'
    })
      .then((data) => {
        console.log('2222222222', data)
        dispatch(setUserinfo(data.data.user))
      })
      .catch((err) => {
        if (err) console.log(err)
      })

    reset()
  }

  return (
    <div className='login_container'>
      <h3 className='login_title'>
        Login
      </h3>
      <Box className='login_form' component='form' sx={{ mt: 1 }} maxWidth onSubmit={handleSubmit(onSubmit)}>

        <Grid item xs={12}>
          <TextField
            margin='normal'
            required
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            {...register('email', {
              required: '이메일을 입력해주세요.',
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: '잘못된 이메일 형식입니다.'
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 6,
                message: '비밀번호는 최소 6자 이상입니다.'
              }
            })}
          />
        </Grid>
        {errors.password && <p>{errors.password.message}</p>}
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
      <div>소셜로그인 자리 </div>
      <div onClick={ChangeSelect} className='login_tosignup'>회원이 아니십니까?</div>
    </div>
  )
}

export default withRouter(Login)
