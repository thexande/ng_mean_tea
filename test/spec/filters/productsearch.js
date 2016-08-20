'use strict';

describe('Filter: productSearch', function () {

  // load the filter's module
  beforeEach(module('App'));

  // initialize a new instance of the filter before each test
  var productSearch;
  beforeEach(inject(function ($filter) {
    productSearch = $filter('productSearch');
  }));

  it('should return the input prefixed with "productSearch filter:"', function () {
    var text = 'angularjs';
    expect(productSearch(text)).toBe('productSearch filter: ' + text);
  });

});
