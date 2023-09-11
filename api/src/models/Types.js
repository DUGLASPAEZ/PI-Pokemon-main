    const { DataTypes } = require('sequelize');
    module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Types', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },  {freezeTableName: true, timestamps: false}
  )
  };