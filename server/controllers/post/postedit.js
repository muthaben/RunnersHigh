// 게시물 수정
const { post, user } = require('../../models')
const { isAuthorized } = require('../../functions/token')

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req)
  try {
    if (!accessTokenData) { // 토큰이 유효하지 않다면
      return res.status(401).send({ message: '유효하지 않은 토큰입니다' })
    }
    if (req.file || Object.keys(req.body).length > 0) {
      if (req.file) {
        await post.update({
          thumbnail_url: req.file.location
        },
        { where: { id: req.params.postid } }
        )
      }
      if (req.body.title) {
        await post.update({
          title: req.body.title
        },
        { where: { id: req.params.postid } }
        )
      }
      if (req.body.text) {
        await post.update({
          text: req.body.text
        },
        { where: { id: req.params.postid } }
        )
      }
      if (req.body.location) {
        await post.update({
          location: req.body.location
        },
        { where: { id: req.params.postid } }
        )
      }
      if (req.body.latitude) {
        await post.update({
          latitude: req.body.latitude
        },
        { where: { id: req.params.postid } }
        )
      }
      if (req.body.longitude) {
        await post.update({
          longitude: req.body.longitude
        },
        { where: { id: req.params.postid } }
        )
      }
      const postInfo = await post.findOne({
        include: [
          { model: user, attributes: ['nickname', 'image_url'] }
        ],
        where: {
          id: req.params.postid
        }
      })
      res.status(201).send({ data: postInfo, message: '닉네임, 비밀번호 또는 프로필 이미지 변경에 성공했습니다' })
    } else {
      res.status(422).send({ message: '변경할 정보가 필요합니다' })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
