import { Sequelize } from "sequelize";

export const sequelize = new Sequelize ('mysql://root:@127.0.0.1:3306/js')
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully')
} catch (error) {
    console.error("Unable to connect to the database", error)
}