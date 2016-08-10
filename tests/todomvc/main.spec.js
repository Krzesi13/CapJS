import HomepageBootstrap from '../../page-objects/todomvc/homepage.po.js';
import BrowserActions from '../../page-objects/todomvc/browseractions.po.js';
import HandlesActions from '../../page-objects/todomvc/handlesactions.po.js';
import log4js from 'log4js';

describe('todo tests', function() {
  let logger = log4js.getLogger();
  var homepagebootstrap = new HomepageBootstrap();
  var browseractions = new BrowserActions();
  var handlesactions = new HandlesActions();
  homepagebootstrap.get();

  it('shouldNewTab', function() {
    var but = homepagebootstrap.getNewTab();
    browseractions.waitandScrolltoElement(but);
    logger.info('Scroll to button');
    browseractions.waitForPresentAndVisible(but);
    logger.info('Click on button');
    handlesactions.switchToHandles(1);
    expect((homepagebootstrap.getTitle2()).getText()).toContain('Plunker');
  });

});
