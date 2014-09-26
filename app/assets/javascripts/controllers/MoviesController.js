movieTime.controller('MoviesCtrl', function($scope, MoviesFactory) {
  $scope.MoviesFactory = MoviesFactory;
  $scope.movies = MoviesFactory.movies;

  $scope.getMovies = function() {
    MoviesFactory.getMovies()
      .success(function(data) {
        $scope.movies = data;
      })
      .error(function() {
        alert("Something went wrong!")
      })
  }();

  $scope.addMovie = function() {
    MoviesFactory.addMovie(MoviesFactory.movieTitle)
      .success(function(movie) {
      $scope.movies.push(movie);
      MoviesFactory.movieTitle = null;
    })
  }
});
