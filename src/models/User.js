import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const Project = sequelize.define('projects',{
    idUser:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreyapellido:{
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING
    },
    clave: {
        type: DataTypes.STRING
    },
}, {
    timestamps: true
});