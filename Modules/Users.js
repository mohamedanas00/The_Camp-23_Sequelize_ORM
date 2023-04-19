const db =require("../Config/DataBase");
const {Sequelize,DataTypes} =require("sequelize")

module.exports =db.define(
    "Users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Username:{
           type:DataTypes.STRING(100),
           allowNull:false,
           unique: true,
        },
        password:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique: true,
        },
        role: {
            type: DataTypes.ENUM('basic', 'premium', 'admin'),
            defaultValue: 'basic',
            allowNull:false,

        }
    }
);

