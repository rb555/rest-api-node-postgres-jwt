import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

sequelize.define('reservas', {
    idReserva:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
})