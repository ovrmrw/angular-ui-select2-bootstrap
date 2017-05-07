import { MySelect2Page } from './app.po';

describe('my-select2 App', () => {
  let page: MySelect2Page;

  beforeEach(() => {
    page = new MySelect2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
