movieTime.controller('MoviesController', function MoviesController($scope, MoviesFactory) {
  $scope.MoviesFactory = MoviesFactory;
  $scope.movies = MoviesFactory.movies;

  $scope.getMovies = function() {
    MoviesFactory.getMovies()
      .success(function(data) {
        $scope.movies = data
      })
      .error(function() {
        alert("Something went wrong!")
      })
  }

  $scope.getMovies();
});
