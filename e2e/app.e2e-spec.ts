import { MiWeb } from './app.po';

describe('MiWeb App', function() {
  let page: MiWeb;

  beforeEach(() => {
    page = new MiWeb();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
