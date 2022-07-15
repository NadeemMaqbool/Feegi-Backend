import { DataSource } from 'typeorm'
import 'dotenv/config'
import { User } from '../entities/User'
import { UserDetails } from '../entities/UserDetails'
const sys = process.env

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "Developer@1",
    database: "rental_app",
    entities: [User, UserDetails],
    synchronize: true,


}).initialize().then(() => {
    console.log('\x1b[46m Database connected succesfully! \x1b[0m');
}).catch(err => {
    console.log("\x1b[41mError in database connection \x1b[0m", err)
})

export default AppDataSource