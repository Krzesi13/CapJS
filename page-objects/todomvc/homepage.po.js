class Homepage {
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


  //actions
  addTodo(name) {
    this.getAddTodoInput().sendKeys(name);
    this.getTodoForm().submit();
  }
  getNumberOfTodos() {
    return element.all(by.repeater('todo in todos')).count();
  }

}
export default Homepage;
