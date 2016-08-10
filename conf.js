exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/todomvc/main.spec.js'],
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true
  },
  onPrepare: function() {
    require("babel-register")({
      "presets": ["es2015"]
    });
  }
};
