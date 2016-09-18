import { TruroVotingUpgradePage } from './app.po';

describe('truro-voting-upgrade App', function() {
  let page: TruroVotingUpgradePage;

  beforeEach(() => {
    page = new TruroVotingUpgradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
