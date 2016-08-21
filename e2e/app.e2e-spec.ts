import { TruroVotingPage } from './app.po';

describe('truro-voting App', function() {
  let page: TruroVotingPage;

  beforeEach(() => {
    page = new TruroVotingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
