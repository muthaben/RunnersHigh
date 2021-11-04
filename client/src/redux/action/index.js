export const SET_USERINFO = 'SET_USERINFO'

const initialState = {
  userinfo: {
    email: '',
    password: ''
  }
}

export const setUserinfo = (userinfo) => {
  return {
    type: SET_USERINFO,
    payload: {
      ...userinfo
    }
  }
}
