// 회원 이미지 수정

const { user } = require('../../models')
const { isAuthorized } = require('../../functions/token')

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req)
  try {
    if (!accessTokenData) {
      res.status(401).send({ message: '유효하지 않은 토큰입니다' })
    } else {
      await user.update({ image_url: req.file.location },
        { where: { id: accessTokenData.id } }
      )
      res.status(201).send({ message: '회원 이미지 수정에 성공했습니다' })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
