(function () {
    angular
        .module('WAM')
        .controller('loginController', loginController);

    function loginController($location, userService) {

        var model = this;

        model.login = login;

        function login(username, password) {
            if(username === null || username === '' || typeof username === 'undefined') {
                model.error = 'username is required';
                return;
            }

            if(password === null || password === '' || typeof password === 'undefined') {
                model.error = 'password is required';
                return;
            }

            userService
                .login(username, password)
                .then(function (found) {
                    if(found !== null) {

                        $location.url('/profile');
                    } else {
                        model.message = "sorry, " + username + " not found. please try again!";
                    }
                });
        }
    }
})();