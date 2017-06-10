(function () {
    angular
        .module('MovieApp')
        .controller('movieSearchController', movieSearchController);

    function movieSearchController(movieService, $routeParams) {
        var model = this;
        model.movieId = $routeParams['movieId'];
        model.selectMovie=selectMovie;


            function selectMovie(movieId) {
                movieService
                    .selectMovie(model.movieId)
                    .then(function (response) {
                        model.movie = response.data;
                    });

            }


    }


})();