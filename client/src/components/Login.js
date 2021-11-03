
import '../stylesheet/login.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'
function Login ({ ChangeSelect }) {
  return (
    <div className='login_container'>
      <h3 className='login_title'>
        Login
      </h3>
      <Box component='form' noValidate sx={{ mt: 1 }} maxWidth>
        <form className='login_form'>
          <Grid item xs={12}>
            <TextField
              margin='normal'
              required
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              sx={{ width: 120 }}
            />
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
            />
          </Grid>
        </form>
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

export default Login
