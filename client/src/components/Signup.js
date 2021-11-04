import '../stylesheet/signup.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
function Signup ({ ChangeSelect }) {
  return (
    <div className='signup_container'>
      <h3 className='signup_title'>
        Signup
      </h3>
      <Box className='signup_form' component='form' noValidate sx={{ mt: 1 }} maxWidth>
        <Grid item xs={12}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='nickname'
            label='Nickname'
            name='nickname'
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin='normal'
            required
            fullWidth
            name='confirm password'
            label='Confirm Password'
            type='confirm password'
            id='confirm password'
          />
        </Grid>
      </Box>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </Button>
      <div onClick={ChangeSelect} className='signup_tosignup'>아이디가 있으십니까?</div>
    </div>
  )
}

export default Signup
