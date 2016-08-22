import HomepageBootstrap from '../../page-objects/todomvc/homepage.po.js';
import BrowserActions from '../../page-objects/todomvc/browseractions.po.js';
import HandlesActions from '../../page-objects/todomvc/handlesactions.po.js';
import log4js from 'log4js';
import jasmineCustomMessage from 'jasmine2-custom-message';

describe('todo tests', function() {
  let logger = log4js.getLogger();
  var homepagebootstrap = new HomepageBootstrap();
  var browseractions = new BrowserActions();
  var handlesactions = new HandlesActions();

  beforeEach(function() {
    homepagebootstrap.get();
  });

  it('shouldTitle', function() {
    var title = homepagebootstrap.getTitle();
    logger.info('Get title');
    since("The title is incorrect").
    expect(title.getText()).toContain('UI Bootstrap');
  });

  it('shouldNewTab', function() {
    var btn = homepagebootstrap.getNewTab();
    browseractions.waitAndScrolltoElement(btn);
    logger.info('Scroll to button');
    browseractions.waitForPresentAndVisible(btn);
    btn.click();
    logger.info('Click on button');
    handlesactions.switchToHandles(1);
    since("The title is incorrect on the second tab").
    expect((homepagebootstrap.getTitle2()).getText()).toContain('Plunker');
  });

});
