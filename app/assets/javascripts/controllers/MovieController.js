movieTime.controller('MovieController', function($scope, MoviesFactory, $routeParams) {
  $scope.MoviesFactory = MoviesFactory;

  $scope.showMovie = function() {
    MoviesFactory.showMovie($routeParams.id)
      .success(function(data) {
        $scope.movie = data;
      })
  };

  $scope.showMovie();
});
