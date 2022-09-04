import { DataTypes } from 'sequelize'

import { database } from '../models'


export const User = database.define('User', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: false
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  created_at: {
    type: DataTypes.DATE
  },
  updated_at: {
    type: DataTypes.DATE
  },
  mobile: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false,
  tableName: 'users'
})
