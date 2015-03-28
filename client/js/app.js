'use strict';

/* App Module */

var cotaApp = angular.module('cotaApp', [
  'ngRoute'
]);

cotaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);