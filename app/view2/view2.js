'use strict';

angular.module('myApp.view2', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'view2Ctrl'
    });
  }])

  .controller('view2Ctrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

    $scope.news = {}
    $scope.submitNews = function() {
      $rootScope.news.unshift($scope.news)
      $scope.news = {}
    }

  }]);
