import Homepage from '../../page-objects/todomvc/homepage.po.js';
import log4js from 'log4js';

describe('todomvc tests', function() {
  let logger = log4js.getLogger();
  var homepage = new Homepage();
  homepage.get();
  logger.info('test log info');
  it('shouldMatchTitle', function() {
    expect(homepage.getTitle().getText()).toEqual('todos');
  });

});
