class BrowserActions {

  waitandScrolltoElement(el) {
     browser.wait(
      browser.executeScript(function(el) { el.scrollIntoView(); }, el.getWebElement()), 10000);
  }

  waitForPresentAndVisible(el){
    browser.wait(function () { return el.isPresent();},10000);
    browser.wait(function () { return el.isDisplayed();},10000);
    //browser.actions().mouseMove(el).click();
  }

}
export default BrowserActions;
