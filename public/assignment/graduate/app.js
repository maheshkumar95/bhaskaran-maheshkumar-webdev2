(function(){
    angular
        .module("WAM",['ngRoute'])
        .config(configuration);

    function configuration($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'home.html'
            })
            .when('/login', {
                templateUrl:'user/login.view.client.html',
                controller: 'loginController',
                controllerAs: 'model'
            });
    }
})();