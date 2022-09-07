import * as dotenv from 'dotenv'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

import { database } from './models'
import MainRoute from './routes/main.route'
import UserIO from './io/user.io'
import ChatIO from './io/chat.io'


dotenv.config()
try {
  database.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*'
  }
})

UserIO(io)
ChatIO(io)

// Routes
app.use('/', MainRoute)

const port = process.env.APP_PORT

server.listen(port || 3000, () => {
  console.log('Listen on *:6001')
})
