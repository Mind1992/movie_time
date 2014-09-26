var movieTime = angular.module('movieTime', ['ngRoute','templates']);

movieTime.config(function ($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'MoviesController',
        templateUrl: 'Movies.html'
      })
    .when('/{{movie.id}}',
      {
        controller: 'MovieController',
        templateUrl: 'Movie.html'
      })
});
