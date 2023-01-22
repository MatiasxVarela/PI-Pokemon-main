const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
    /* Defined Pokemon Type model */
  
    sequelize.define('pokemonType', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncremente: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  
    });
  };