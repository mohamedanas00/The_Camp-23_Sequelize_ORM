const db =require("../Config/DataBase");
const { DataTypes } = require("sequelize");


module.exports = db.define(
    "Post",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        }

    }
);
// Post.belongsTo(Users, {
//     foreignKey: 'userId'
// }); 