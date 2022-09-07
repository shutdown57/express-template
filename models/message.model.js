import { DataTypes, Model } from 'sequelize'

import { database } from '../models'
import { Chat } from './chat.model'
import { User } from './user.model'


export class Message extends Model {}
Message.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT
  },
  read_at: {
    type: DataTypes.DATE
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE
  }
}, {
  sequelize: database,
  timestamps: true,
  tableName: 'chat_messages',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

User.hasMany(Message)
Message.belongsTo(User)

Chat.hasMany(Message)
Message.belongsTo(Chat)
