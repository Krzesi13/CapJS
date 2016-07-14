import Homepage from '../../page-objects/todomvc/homepage.po.js';
import log4js from 'log4js';

describe('todomvc tests', function() {
  let logger = log4js.getLogger();
  var homepage = new Homepage();
  homepage.get();

  it('shouldMatchTitle', function() {
    logger.info('Checking title');
    expect(homepage.getTitle().getText()).toEqual('todos');
  });

  it('shouldAddNewTodos', function() {
    homepage.addTodo('test1');
    homepage.addTodo('test2');
    homepage.addTodo('test3');
    logger.info('Adding new todo');
    expect(homepage.getNumberOfTodos()).toEqual(3);
  })

  s


});
