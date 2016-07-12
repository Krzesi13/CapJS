exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/todomvc/main.spec.js'],
  jasmineNodeOpts: {
    showColors: true
  },
  onPrepare: function() {
    global.isAngularSite = function(flag) {
      browser.ignoreSynchronization = !flag;
    }
  }
};
