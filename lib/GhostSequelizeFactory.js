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
   * @property {String} host
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
   * @property {String} username
   * @property {String} password
   * @property {GhostSequelizeFactory_ConfigOptions} options
   * @property {GhostSequelizeFactory_ConfigModels} models
   */

  /**
   * @param {GhostSequelizeFactory_Config} config
   * @param {String} [rootDir]
   * @return {GhostSequelize}
   */
  constructor (config, rootDir) {
    const sequelize = new Sequelize(config.database, config.username, config.password, config.options);
    return new GhostSequelize(sequelize, config.models, rootDir);
  }


}

module.exports = GhostSequelizeFactory;