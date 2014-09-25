movieTime.controller('MovieController', function MoviesController($scope, MoviesFactory, $routeParams) {
  $scope.MoviesFactory = MoviesFactory;

  $scope.showMovie = function() {
    MoviesFactory.showMovie($routeParams.id)
      .success(function(data) {
        $scope.movies = data;
      })
  };

  $scope.getMovies();
});
