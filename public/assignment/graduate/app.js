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
                templateUrl:'views/user/templates/login.view.client.html',
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when('/register',{
                templateUrl:'views/user/templates/register.view.client.html'
            })
            .when('/profile',{
                templateUrl:'views/user/templates/profile.view.client.html'
            });
    }
})();