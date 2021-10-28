// 회원정보 조회
const { isAuthorized } = require('../../functions')
const { user } = require('../../models')

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req)

  if (!accessTokenData) {
    res.status(401).send({ message: '회원탈퇴 성공했습니다.' })
  } else {
    await user.destory({
      where: {
        id: accessTokenData.id
      }
    })
    res.status(200).send({ message: '회원탈퇴 성공했습니다.' })
  }
}
