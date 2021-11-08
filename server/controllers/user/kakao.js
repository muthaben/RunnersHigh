const { user } = require('../../models')
const { signAccessToken, sendAccessToken } = require('../../functions/token')
module.exports = async (req, res) => {
  const userInfo = await user.findOne({
    where: {
      email: req.body.email
    }
  })
  try {
    if (!userInfo) {
      const newUser = await user.create({
        email: req.body.email,
        image_url: req.body.thumbnail_url,
        nickname: req.body.nickname,
        social_type: 'kakao'
      })
      const accessToken = signAccessToken(newUser.dataValues)
      console.log(accessToken)
      sendAccessToken(res, accessToken, newUser.id)
    } else {
      const accessToken = signAccessToken(userInfo.dataValues)
      sendAccessToken(res, accessToken, userInfo.id)
    }
  } catch (error) {
    res.status(500).sned(error)
  }
}

// 일단 이메일이 들어어면 db에 회우너가입이 되어있는지 확인한다
// 만약 회원가입이 되어 있다면 그냥 토큰을 발급해주고 토큰과 200 코드만 보내준다
// 만약 회원 정보가 업다면 db에 저장해주고 그 토큰을 발급해주고 200코드를 보내준다
