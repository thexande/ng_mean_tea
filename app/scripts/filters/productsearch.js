'use strict';

/**
 * @ngdoc filter
 * @name App.filter:productSearch
 * @function
 * @description
 * # productSearch
 * Filter in the App.
 */
angular.module('App')
  .filter('productSearch', function () {
    return function (input) {
      return 'productSearch filter: ' + input;
    };
  });
