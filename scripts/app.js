var app = angular.module('portfolio', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: 'views/portfolio.html',
            controller: 'ScrollCtrl'
        });
});
app.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);
