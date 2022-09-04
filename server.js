import * as dotenv from 'dotenv'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import path from 'path'

import { database } from './models'
import UserRoute from './routes/user.route'


dotenv.config()
try {
  database.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const app = express()

app.use('/static', express.static(path.join(__dirname, 'static')))
app.use('/user', UserRoute)

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*'
  }
})

app.set('io', io)

server.listen(6001, () => {
  console.log('Listen on *:6001')
})
