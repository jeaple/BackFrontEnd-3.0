/*const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

const User = sequelize.define(
    'User',
    {
        //Atributos da model são definidos aqui
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            //allowNull tem valor padrão true
        },
    },
    {
        //Outras opções podem ser inseridas aqui
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Cep: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Logradouro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Numero: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Complemento: {
            type: DataTypes.STRING,
        },
        Bairro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Cidade: {
            type: DataTypes.String,
            allowNull: false,
        },
        Estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        MunicipioIBGE: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
    
);*/
const { Model, DataTypes, Sequelize } = require('sequelize');
/*const Sequelize = require('sequelize');
const { type } = require('os');
const { isNumberObject } = require('util/types');*/
const sequelize = new Sequelize('postgres://postgres:banco123@localhost:5432/apinode');

class Endereco extends Model {}

Endereco.init({
        Id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        Cep: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Numero: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Complemento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Bairro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Cidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        MunicipioIBGE: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Endereco',
        tableName: 'enderecos',
        timestamps: true
    });

    module.exports = Endereco;
