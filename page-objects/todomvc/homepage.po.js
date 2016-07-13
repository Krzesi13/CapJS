class Homepage {
  get() {
    browser.get('http://todomvc.com/examples/angularjs/');
  }
  getTitle() {
    return element(by.css('h1'));
  }
}
export default Homepage;
