(function(){
    angular
        .module('MovieApp')
        .factory('userService', userService);

    function userService($http) {
        var api= {
            createUser : createUser,
            findUserByUsername : findUserByUsername
        };
        return api;

            // model.findUserByCredentials= findUserByCredentials;
            // model.deleteUser=deleteUser;
            // model.updateUser=updateUser;
            // model.findUserById= findUserById;

        // function deleteUser(userId) {
        //     var url = "/api/assignment/graduate/user/"+userId;
        //     return $http.delete(url)
        //         .then(function (response) {
        //             return response.data;
        //         });
        // }

        // function updateUser(userId, user) {
        //     var url = "/api/assignment/graduate/user/"+userId;
        //     return $http.put(url, user)
        //         .then(function (response) {
        //             return response.data;
        //         });
        // }

        function createUser(user) {
            var url = "/api/project/graduate/user";
            return $http.post(url, user)
                .then(function (response) {
                    return response.data;
                });

        }

        function findUserByUsername(username) {
            var url = "/api/project/graduate/user?username=" +username;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }
        // }
        //     var user = users.find(function (user) {
        //         return user.username === username;
        //     });
        //     if(typeof user === 'undefined') {
        //         return null;
        //     }
        //     return user;
        // }

        // function findUserById(userId) {
        //     var url = "/api/assignment/graduate/user/"+userId;
        //     return $http.get(url)
        //         .then(function (response) {
        //             return response.data;
        //         });
        // }

        // function findUserByCredentials(username, password) {
        //     var url = "/api/assignment/graduate/user?username="+username+"&password="+password;
        //     return $http.get(url)
        //         .then(function (response) {
        //             return response.data;
        //         });
        //}
    }
})();