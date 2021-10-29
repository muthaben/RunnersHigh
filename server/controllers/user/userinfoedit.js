// 회원정보 수정
const { user } = require('../../models')
const { isAuthorized } = require('../../functions/token')

module.exports = async (req, res) => {
  const acceessTokenData = isAuthorized(req)

  if (!acceessTokenData) {
    res.status(401).send({ message: '유효하지 않은 토큰입니다' })
  } else {
    user.create({
      email: 'email'
    })
    res.send('')
  }
}
