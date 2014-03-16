'use strict';

//Setting up route
angular.module('startupBoard').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
      .state('all articles', {
        url: '/boards',
        templateUrl: 'views/boards/list.html'
    })
      .state('create article', {
        url: '/board/new',
        templateUrl: 'views/boards/create.html'
    })
      .state('edit article', {
        url: '/board/:articleId/edit',
        templateUrl: 'views/boards/edit.html'
    })
      .state('article by id', {
        url: '/board/:articleId',
        templateUrl: 'views/boards/view.html'
    })
      .state('home', {
        url: '/',
        templateUrl: 'views/index.html'
    });
}
]);

//Setting HTML5 Location Mode
angular.module('startupBoard').config(['$locationProvider',
  function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}
]);
