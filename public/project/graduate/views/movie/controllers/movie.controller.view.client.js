(function () {
    angular
        .module('MovieApp')
        .controller('movieController', movieController);


    function movieController(movieService,$routeParams,$location){
        var model=this;

        model.searchMovies = searchMovies;


        function searchMovies(searchTerm) {
            movieService
                .searchMovies(searchTerm)
                .then(function(response) {

                    //data = response.data.replace("jsonFlickrApi(","");
                    // data = data.substring(0,data.length - 1);
                    // data = JSON.parse(data);
                    model.movies = response.data.Search;
                    //$location.url("/home/"+searchTerm);

                });
        }




    }






})();