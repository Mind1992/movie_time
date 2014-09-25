movieTime.factory('MoviesFactory', function MoviesFactory($http) {
  var factory = {};

  factory.movies = [];
  factory.getMovies = function () {
    return $http.get('/movies.json');
  };

  factory.showMovie = function(id) {
    return $http.get('/movies/' + id + ',json')
  };

  return factory;
})
