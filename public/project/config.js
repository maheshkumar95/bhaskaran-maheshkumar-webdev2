(function () {
    angular
        .module('MovieApp')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'movieController',
                controllerAs : 'model'

            })
            .when('/movie/:movieId', {
                templateUrl: 'graduate/views/movie/templates/movie-list.view.client.html',
                controller:  'movieSearchController',
                controllerAs: 'model'
            })


    }
})();