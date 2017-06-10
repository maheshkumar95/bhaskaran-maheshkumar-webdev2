(function () {
    angular
        .module('MovieApp')
        .service('movieService', movieService);



    function movieService($http) {

        this.searchMovies=searchMovies;
        this.selectMovie=selectMovie;

        var searchUrl= "http://www.omdbapi.com/?&apikey=49ec07d0&s=SEARCHTERM" ;
        var selectUrl ="http://www.omdbapi.com/?&apikey=49ec07d0&i=MOVIEID" ;


        function selectMovie(movieId) {
            var url = selectUrl
                .replace("MOVIEID", movieId);
            return $http.get(url);
        }

        function searchMovies(searchTerm) {
            var url = searchUrl
            .replace("SEARCHTERM", searchTerm);
            return $http.get(url);
        }
    }

})();