import Homepage from '../../page-objects/todomvc/homepage.po.js';
import log4js from 'log4js';

describe('todomvc tests', function() {
  let logger = log4js.getLogger();
  var homepage = new Homepage();

  beforeEach(function() {
    homepage.get();
  })

  it('shouldMatchTitle', function() {
    logger.info('Checking title');
    expect(homepage.getTitle().getText()).toEqual('todos');
  });

  it('shouldAddNewTodos', function() {
    homepage.addTodo('test1');
    homepage.addTodo('test2');
    homepage.addTodo('test3');
    logger.info('Adding new todos');
    expect(homepage.getNumberOfTodos()).toEqual(3);
    homepage.removeAllTodos();
  })

  it('shouldNotContainTodosAtStart', function() {
    expect(homepage.getNumberOfTodos()).toEqual(0);
  })


});
