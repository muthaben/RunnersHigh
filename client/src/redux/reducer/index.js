import { combineReducers } from 'redux'
import userReducer from './user_Reducer'
import postReducer from './post_Reducer'

const rootReducer = combineReducers({
  userReducer,
  postReducer
})

export default rootReducer
