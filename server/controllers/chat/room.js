// POST room
const { room, user_room } = require('../../models')
const { isAuthorized } = require('../../functions/token')
module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req)

  const userRoomInfo = await user_room.findOne({
    where: {
      userId: accessTokenData.id,
      pairId: req.body.pairId
    }
  })

  if (!userRoomInfo) {
    const roomInfo = await room.create({
      room: 'create'
    })
    await user_room.create({
      userId: accessTokenData.id,
      roomId: roomInfo.dataValues.id,
      pairId: req.body.pairId
    })
    await user_room.create({
      userId: req.body.pairId,
      roomId: roomInfo.dataValues.id,
      pairId: accessTokenData.id
    })
    res.status(200).send({ message: '채팅방이 만들어졌습니다' })
  } else {
    res.status(200).send({ message: '이미 상대방과 채팅방이 존재합니다' })
  }
}
