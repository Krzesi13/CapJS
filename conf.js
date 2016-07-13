exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/todomvc/test.spec.js'],
  jasmineNodeOpts: {
    showColors: true
  },
  onPrepare: function() {
    require("babel/register");
    // global.isAngularSite = function(flag) {
    //   browser.ignoreSynchronization = !flag;
    // }
  },

};
