const Sequelize = require('sequelize')

module.exports = () => {

  // instancia de sequelize (conexión a BD)
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  })

  // importamos modelo (mapa contra una tabla)
  const User = require('./model/User')(sequelize, Sequelize.DataTypes)

  return { User }
}