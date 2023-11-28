import 'dotenv/config';
import app from './app.js';
import { sequelize } from './database/database.js';

import './models/User.js'
import './models/Reserva.js'


async function main(){
    try {
        await sequelize.sync({force:true})
        app.listen(3000);
        console.log("Server is listening on port", 3000);
    } catch (error) {
        console.log('Unable to connect', error);
    }
}

main();

