import { combineReducers } from 'redux'
import userReducer from './user_Reducer.js'
import postReducer from './post_Reducer'

const rootReducer = combineReducers({
  userReducer,
  postReducer
})

export default rootReducer
