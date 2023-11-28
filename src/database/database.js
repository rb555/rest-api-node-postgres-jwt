import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'db_booked_connect',
     'postgres',
     'usuario1',
   {
    host: 'localhost',
    dialect: 'postgres',
    } 
);
