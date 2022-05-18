import { DataTypes } from "sequelize";
import { sequelize } from "./database.js"

export const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false
    },
    genre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    resume:{
        type:DataTypes.STRING,
        allowNull:true
    }
})

Book.sync()

export const EBook_User = sequelize.define('EBook_User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

EBook_User.sync()