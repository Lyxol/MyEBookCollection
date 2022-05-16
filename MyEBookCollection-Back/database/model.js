import { DataTypes } from "sequelize";
import { sequelize } from "./database.js"

export const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
    /***/
})

Book.sync()

export const EBook_User = sequelize.define('EBook_User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
    /***/
})

EBook_User.sync()