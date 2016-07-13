import Homepage from '../../page-objects/todomvc/homepageClass.po.js';

describe('todomvc tests', function() {
  var homepage = new Homepage();
  homepage.get();
  it('shouldMatchTitle', function() {
    expect(homepage.getTitle().getText()).toEqual('todos');
  });

});
