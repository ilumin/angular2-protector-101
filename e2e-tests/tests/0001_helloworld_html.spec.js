describe('Hello World in HTML', function() {
  beforeAll(function() {
    isAngularSite(true);
    browser.get('/');
  });

  it('should have an h1 which says Hello World', function() {
    var h1_txt='Hello World!';
    var h1=element(by.id('h1'));
    h1.getText().then(function(x) {
      expect(x).toEqual(h1_txt);
    });
  });
});
