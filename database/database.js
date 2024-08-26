const Sequelize = require('sequelize')
const config = require('../Config/database')

const Endereco = require('../Models/Endereco')

const connection = new Sequelize(config)

Endereco.init(connection)
Endereco.associate(connection.models)

module.exports = connection