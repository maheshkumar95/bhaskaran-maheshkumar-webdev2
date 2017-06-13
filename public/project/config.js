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
            .when('/login', {
                templateUrl: 'graduate/views/user/templates/login.view.client.html',
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when('/register', {
                templateUrl: 'graduate/views/user/templates/register.view.client.html',
                 controller: 'registerController',
                 controllerAs: 'model'
            })
            .when('/movie/:movieId', {
                templateUrl: 'graduate/views/movie/templates/movie-list.view.client.html',
                controller:  'movieSearchController',
                controllerAs: 'model'
            })


    }
})();