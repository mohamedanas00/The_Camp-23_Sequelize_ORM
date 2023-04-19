const {Sequelize} =require("sequelize");
const sequelize = new Sequelize({
    host :"localhost",
    dialect:"mysql",
    username:"root",
    database: "task_seven",
    logging: console.log,
});

module.exports=sequelize;