var movieTime = angular.module('movieTime', ['ngRoute','templates']);

movieTime.config(function ($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'MoviesController',
        templateUrl: 'Movies.html'
      })
    .when('/movies/:id',
      {
        controller: 'MovieController',
        templateUrl: 'Movie.html'
      })
});
