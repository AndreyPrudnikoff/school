const Sequelize = require('sequelize');


const sequelize = new Sequelize('mydb', 'admin', 'andrew0000', {
    dialect: 'mysql',
    host: 'database.cyfsonj8lt8x.eu-west-3.rds.amazonaws.com',
    // host: 'localhost',
    port: 3306
});

const User = require('./User')(sequelize);

module.exports = {
    sequelize: sequelize,
    user: User
}
