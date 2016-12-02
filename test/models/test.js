"use strict";

/**
 * @name Test
 * @type {Object}
 * @property {Number} id
 * @property {String} name
 * @property {String} title
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

module.exports = function(sequelize, DataTypes) {

  const Test = sequelize.define("test", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Test;
};