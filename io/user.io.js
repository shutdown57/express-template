import { User } from '../models/user.model'
import { Rule } from '../models/rule.model'


export default function (io) {
  io.of('/user')
    .use((socket, next) => {
      console.log(socket.id)
      next()
    })
    .on('connection', (socket) => {
      socket.broadcast.emit('user:connected', {
        socket_id: socket.id
      })

      socket.on('user', async (msg) => {
        const user = await User.findOne({
          where: { id: '3c5e1d3f-18e2-43ca-8dea-25e249e34e5d' },
          include: Rule
        })
        console.log(user)
        console.log(msg)
      })
    })
}
