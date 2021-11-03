import Login from './Login'
import Signup from './Signup'
import '../stylesheet/loginmodal.css'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
function LoginModal ({ showModal, OpenModal }) {
  const [selectLogin, setSelectLogin] = useState(false)

  const ChangeSelect = () => {
    setSelectLogin(!selectLogin)
  }
  const doubleFunction = () => {
    OpenModal()
    setSelectLogin(false)
  }
  return (
    <div>
      {showModal
        ? <div className='loginmodal_background'>

          <div className='loginmodal_container'>
            <CloseIcon className='loginmodal_icon' onClick={doubleFunction} />
            {selectLogin
              ? <Signup ChangeSelect={ChangeSelect} />
              : <Login ChangeSelect={ChangeSelect} />}
          </div>
        </div>
        : null}
    </div>
  )
}

export default LoginModal
