import {
  SET_POST,
  SET_POSTS
} from '../action/index'
import { initialState } from './Initialstate'

const itemReducer = (state = initialState , action) => {
  switch(action.type) {
    case SET_POST: 
    return Object.assign({} , state, {
      post:action.payload
    })
    case SET_POSTS :
      return Object.assign({} , state, {
        posts : action.payload
      })
      default : 
      return state
    }
  }
export default itemReducer