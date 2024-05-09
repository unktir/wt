var sequelize = require('sequelize');

var dbcontext = new sequelize({
    dialect: "sqlite",
    storage: "appdb.sqlite"
  });

module.exports = dbcontext;