const Promise = require('bluebird');
const Chance = require('chance').Chance();

class DbSetup {

  /**
   * @param {Test} data
   * @returns {Promise<Test,err>}
   */
  static setupTest (data = {}) {
    return Db.test.create({
      name: data.name || Chance.name(),
      title: data.title || Chance.word()
    })
  }

}

module.exports = DbSetup;