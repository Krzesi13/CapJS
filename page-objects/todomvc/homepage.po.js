import log4js from 'log4js';


class Homepage {
  constructor() {
    this.logger = log4js.getLogger();
  }

  //elements
  get() {
    browser.get('http://todomvc.com/examples/angularjs/');
  }
  getTitle() {
    return element(by.css('h1'));
  }
  getTodoForm() {
    return element(by.id('todo-form'));
  }
  getAddTodoInput() {
    return element(by.model('newTodo'));
  }
  getTodos() {
    return element.all(by.repeater('todo in todos'));
  }


  //actions
  addTodo(name) {
    this.getAddTodoInput().sendKeys(name);
    this.getTodoForm().submit();
  }
  getNumberOfTodos() {
    return element.all(by.repeater('todo in todos')).count();
  }
  removeFirstTodo() {
    var todo = element.all(by.repeater('todo in todos')).first().element(by.css('.view'));
    browser.actions().mouseMove(todo).perform();
    todo.element(by.css('.destroy')).click();
  }
  removeAllTodos() {
    var n = this.getNumberOfTodos();
    // this.logger.info(`number of todos: ${n}`);
    this.removeFirstTodo();
    this.removeFirstTodo();
    this.removeFirstTodo();

  }
}
export default Homepage;
