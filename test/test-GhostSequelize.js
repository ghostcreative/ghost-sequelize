const Chai = require('chai');
const expect = Chai.expect;
const _ = require('lodash');

const GhostSequelize = require('../index');
const ghostSequelize = new GhostSequelize(Config.get('database'));

describe('GhostSequelize', () => {

  beforeEach(() => ghostSequelize.sync());

  describe('dropTable', () => {

    it('should drop a table', () => {

    })

  });

  describe('getDb', () => {});
  describe('sync', () => {});
  describe('syncTable', () => {});
  describe('truncateTable', () => {});
  describe('truncateTables', () => {});

});