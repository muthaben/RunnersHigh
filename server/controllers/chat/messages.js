// GET message
const { chatting, user } = require('../../models')

module.exports = async (req, res) => {
  try {
    const chatInfo = await chatting.findAll({
      include: [
        { model: user, attributes: ['nickname', 'image_url'] }
      ]
    })
    res.status(200).send({ data: chatInfo, message: '룸에대한 채팅 목록을 가져왔습니다' })
  } catch (error) {
    res.status(500).send(error)
  }
}
