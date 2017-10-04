'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', 'uibDateParser',  '$rootScope', function($scope, $http, uibDateParser,  $rootScope) {
if($rootScope.news==null){
  $http.get('data/news.json')
        .success(function(data) {
             $rootScope.news = data
          })
         .error(function() {
            console.log("failed reading file")
          });
}
}]);
