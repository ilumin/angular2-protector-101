exports.config = {
  framework: 'jasmine2',
  // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.53.1.jar',
  // get selenium path and version from `node_modules/protractor/bin/webdriver-manager update`
  seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',

  // location of E2E test specs
  specs: [
    '../e2e-tests/tests/**/*.spec.js'
  ],

  // allow for testing of non-Angular sites
  // From http://ng-learn.org/2014/02/Protractor_Testing_With_Angular_And_Non_Angular_Sites/
  onPrepare: function(){
    global.isAngularSite = function(flag){
      browser.ignoreSynchronization = !flag;
    };
  }
};
