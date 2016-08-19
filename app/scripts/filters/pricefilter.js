'use strict';

/**
 * @ngdoc filter
 * @name App.filter:priceFilter
 * @function
 * @description
 * # priceFilter
 * Filter in the App.
 */
angular.module('App')
  .filter('priceFilter', function () {
    return function (input) {
      return 'priceFilter filter: ' + input;
    };
  });
