'use strict';

/**
 * @ngdoc filter
 * @name App.filter:categoryFilter
 * @function
 * @description
 * # categoryFilter
 * Filter in the App.
 */
angular.module('App')
  .filter('categoryFilter', function () {
    return function (input) {
      return 'categoryFilter filter: ' + input;
    };
  });
