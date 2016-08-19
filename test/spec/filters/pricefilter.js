'use strict';

describe('Filter: priceFilter', function () {

  // load the filter's module
  beforeEach(module('App'));

  // initialize a new instance of the filter before each test
  var priceFilter;
  beforeEach(inject(function ($filter) {
    priceFilter = $filter('priceFilter');
  }));

  it('should return the input prefixed with "priceFilter filter:"', function () {
    var text = 'angularjs';
    expect(priceFilter(text)).toBe('priceFilter filter: ' + text);
  });

});
