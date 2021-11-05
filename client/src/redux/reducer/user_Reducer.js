import { SET_USERINFO, SET_ISLOGIN } from '../action/index'
import { initialState } from './Initialstate'

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERINFO:
      return Object.assign({}, state, { userinfo: action.payload })
    case SET_ISLOGIN:
      return Object.assign({}, state, { isLogin: action.payload })
    default :
      return state
  }
}

export default itemReducer
