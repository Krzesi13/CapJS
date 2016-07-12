var Homepage = require('../../page-objects/todomvc/homepage.po.js');
describe('todomvc tests', function() {
  var homepage = new Homepage();
  homepage.get();
  it('shouldMatchTitle', function() {
    expect(homepage.title.getText()).toEqual('todos');
  });

});
