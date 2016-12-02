const Config = require('config');
const Chai = require('chai');
const expect = Chai.expect;
const _ = require('lodash');

const GhostSequelize = require('../index');
const Db = new GhostSequelize(Config.get('database'), __dirname);

describe('GhostSequelize', () => {

  beforeEach(() => Db.sync());

  describe('dropTable', () => {

    it('should drop a table', () => {
      return Db.dropTable('test')
    })

  });

  describe('getDb', () => {

    it('should get the db', () => {
      return Db.getDb();
    })

  });

  describe('sync', () => {

    it('should sync the db', () => {
      return Db.sync();
    })

  });


  describe('syncTable', () => {

    it('should sync a table', () => {
      return Db.syncTable('test');
    })

  });

  describe('truncateTable', () => {

    it('should truncate a table', () => {
      return Db.truncateTable('test');
    })

  });

  describe('truncateTables', () => {

    it('should truncate tables', () => {
      return Db.truncateTable(['test']);
    })

  });

});