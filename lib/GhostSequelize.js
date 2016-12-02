const Fs = require('fs');
const Path = require('path');
const Promise = require('bluebird');

class GhostSequelize {

  /**
   * @param {Sequelize} sequelize
   * @param {GhostSequelizeFactory_ConfigModels} config
   * @param {String} [rootDir] -- needed to run with mocha
   */
  constructor (sequelize, config, rootDir) {
    this._rootDir = rootDir || Path.dirname(require.main.filename);
    this._sequelize = sequelize;
    this._db = this._buildDb(config);
  }

  /**
   * @param {String} tableName
   * @param {Object} [options]
   * @return {Sequelize}
   */
  dropTable (tableName, options) {
    return this._db[tableName].drop(options);
  }

  getDb () {
    return this._db;
  }

  sync () {
    return this._db.sequelize.sync();
  }

  /**
   * @param {String} tableName
   * @return {Sequelize}
   */
  syncTable (tableName) {
    return this._db[tableName].sync();
  }

  /**
   * @param {String} tableName
   * @return {Sequelize}
   */
  truncateTable (tableName) {
    return this._db[tableName].destroy({ where: {} });
  }

  /**
   * @param {[String]} tableNames
   * @return {Sequelize}
   */
  truncateTables (tableNames) {
    return Promise.mapSeries(tableNames, (tableName) => this.truncateTable(tableName))
  }

  /**
   * @param {GhostSequelizeFactory_ConfigModels} config
   * @return {Object<String,Sequelize.Model|Sequelize>}
   */
  _buildDb (config) {
    const db = {};
    const modelPathDir = Path.join(this._rootDir, config.dirPath);
    Fs.readdirSync(modelPathDir)
    .filter(file => (file.indexOf(".") !== 0) && (file !== "index.js"))
    .forEach(file => {
      const model = this._sequelize.import(Path.join(modelPathDir, file));
      db[model.name] = model;
    });

    Object.keys(db).forEach(modelName => {
      if ("associate" in db[modelName]) db[modelName].associate(db)
    });

    db.sequelize = this._sequelize;
    return db;
  }

}

module.exports = GhostSequelize;
