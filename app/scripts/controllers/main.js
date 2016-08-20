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
    $scope.cart = []
    $scope.menu = menu.data
    $scope.addToCart = (id) => {
      var menuItem = menu.data.filter(i => i._id === id)[0]
      $scope.cart.push(menuItem)
      console.log(menuItem)
    }
    $scope.goToCart = () => {
      
    }
   
  });
