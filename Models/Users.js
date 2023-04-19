const db =require("../Config/DataBase");
const { DataTypes } =require("sequelize");

module.exports =db.define(
    "users",
    {
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
            type: Sequelize.ENUM('basic', 'premium', 'admin'),
            defaultValue: 'basic'
          }
    }
);

