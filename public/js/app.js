(function() {
  angular
    .module('rbeneroff', ['ui.router'])
    .config(MainRouter)
  .run(
  ['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams){
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
  }]);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
    })
    .state('hume', {
      url: '/proposals/hume',
      templateUrl: 'hume.html',
    })
    .state('workwithme', {
      url: '/workwithme',
      templateUrl: 'workwithme.html',
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'portfolio.html',
    })
    .state('andrewscoffee', {
      url: '/portfolio/andrewscoffee',
      templateUrl: 'andrewscoffee.html',
    })
    .state('seen', {
      url: '/portfolio/seen',
      templateUrl: 'seen.html',
    })
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
    }); //locationProvider

  } //MainRouter
})(); //IIFE
