import { PrawAppPage } from './app.po';

describe('praw-app App', () => {
  let page: PrawAppPage;

  beforeEach(() => {
    page = new PrawAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
