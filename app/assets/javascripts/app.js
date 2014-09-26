var movieTime = angular.module('movieTime', ['ngRoute','templates']);

movieTime.config(function ($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'MoviesCtrl',
        templateUrl: 'Movies.html'
      })
    .when('/movies/:id',
      {
        controller: 'MovieController',
        templateUrl: 'Movie.html'
      })
});
