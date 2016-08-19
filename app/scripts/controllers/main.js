'use strict';

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */
angular.module('App')
  .controller('MainCtrl', function (menu, $http, $scope) {
    // $http.get('/scripts/mean_tea_data.json').then(res => $scope.menu = res)
    console.log(menu)
    $scope.menu = menu.data
   
  });
