export const SET_USERINFO = 'SET_USERINFO'
export const SET_ISLOGIN = 'SET_ISLOGIN'

export const setUserinfo = (userinfo) => {
  return {
    type: SET_USERINFO,
    payload: {
      ...userinfo
    }
  }
}

export const setIsLogin = (isLogin) => {
  return {
    type: SET_ISLOGIN,
    payload: isLogin

  }
}
