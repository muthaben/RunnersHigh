// GET room
const { user_room, user } = require('../../models')
const { isAuthorized } = require('../../functions/token')
module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req)

  const userRoomInfo = await user_room.findAll({
    where: {
      userId: accessTokenData.id
    },
    include: [
      { model: user }
    ]
  })
  res.status(200).send(userRoomInfo)
}
