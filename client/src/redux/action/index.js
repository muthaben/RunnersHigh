export const SET_USERINFO = 'SET_USERINFO'
export const SET_ISLOGIN = 'SET_ISLOGIN'
export const SET_POST = 'SET_POST'
export const SET_POSTS = "SET_POSTS"
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
export const setPost = (post) => {
  return {
    type: SET_POST,
    payload: post
  }
}
export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    payload: posts
  }
}


