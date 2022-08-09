import 'core-js/stable'
import 'regenerator-runtime/runtime'

import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import path from 'path'

import { a } from '#routes'


console.log(a)

const app = express()

app.use('/static', express.static(path.join(__dirname, 'static')))


const server = http.createServer(app)
const io = new Server(server)


app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '/static/index.html'))
})

io.on('connection', (socket) => {
  console.log('A user connected')

  socket.on('test', (msg) => {
    console.log(msg)
  })
})

server.listen(6001, () => {
  console.log('Listen on *:6001')
})
