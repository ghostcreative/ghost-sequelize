'use strict';

const GhostSequelize = require('./GhostSequelize');
const Sequelize = require('sequelize');

class GhostSequelizeFactory {

  /**
   * @name GhostSequelizeFactory_ConfigModels
   * @property {String} dirPath
   */

  /**
   * @name GhostSequelizeFactory_ConfigOptions
   * @property {'mysql'|'postgres'|'sqlite'|'mssql'} dialect
   * @property {Object} dialectOptions
   * @property {String} timezone
   * @property {Boolean} logging
   * @property {Boolean} benchmark
   * @property {Object} sync
   * @property {Object} pool
   */

  /**
   * @name GhostSequelizeFactory_Config
   * @type {Object}
   * @property {String} database
   * @property {String} host
   * @property {String} username
   * @property {String} password
   * @property {GhostSequelizeFactory_ConfigOptions} options
   * @property {GhostSequelizeFactory_ConfigModels} models
   */

  /**
   * @param {GhostSequelizeFactory_Config} config
   * @return {GhostSequelize}
   */
  constructor (config) {
    const sequelize = new Sequelize(config.database, config.username, config.password, config.options);
    return new GhostSequelize(sequelize, config.models);
  }


}

module.exports = GhostSequelizeFactory;