(function () {
    angular
        .module('MovieApp')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './home.html'
            })
            .when('/search', {
                templateUrl: 'graduate/views/movie/templates/movie-search.view.client.html',
                controller: 'movieSearchController',
                controllerAs : 'model'
            })


    }
})();