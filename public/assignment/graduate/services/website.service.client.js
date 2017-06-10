(function () {
    angular
        .module('WAM')
        .service('websiteService', websiteService);
    
    function websiteService($http) {
        this.findAllWebsitesForUser = findAllWebsitesForUser;
        this.findWebsiteById = findWebsiteById;
        this.deleteWebsite = deleteWebsite;
        this.createWebsite = createWebsite;
        this.updateWebsite = updateWebsite;


        function updateWebsite(websiteId,website) {
            var url = "/api/assignment/graduate/website/" +websiteId;
            return $http.put(url, website)
                .then(function (response) {
                    console.log(response.data);
                    return response.data;


                });
        }
        function createWebsite(website) {
            var url = "/api/assignment/graduate/website";
            return $http.post(url,website)
                .then(function (response) {
                    return response.data;

                });

        }

        function deleteWebsite(websiteId) {

            var url="/api/assignment/graduate/website/" +websiteId;
            return $http.delete(url)
                .then(function(response){
                    return response.data;
                });
        }
        
        function findWebsiteById(websiteId) {

            var url = "/api/assignment/graduate/website/"+websiteId ;
            return $http.get(url)
                .then(function(response){
                    return response.data;
                });

        }

        function findAllWebsitesForUser(userId) {
            var url = "/api/assignment/graduate/user/"+userId+"/website";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();