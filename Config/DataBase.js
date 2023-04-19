const {Sequelize} =require("sequelize");
const sequelize = new Sequelize({
    host :"localhost",
    dialect:"mysql",
    username:"root",
    database: " sequelize_orm",
    logging: console.log,
});

module.exports=sequelize;