var homepage = function() {
  this.title = element(by.css('h1'));

  this.get = function() {
    browser.get('http://todomvc.com/examples/angularjs/');
  }
}
module.exports = homepage;
