import { SET_USERINFO } from '../action/index'

const initialState = {
  userinfo: {
    email: '',
    password: ''
  }
}
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERINFO:
      return Object.assign({}, state, { userinfo: action.payload })

    default :
      return state
  }
}

export default itemReducer
