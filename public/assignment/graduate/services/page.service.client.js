(function () {
    angular
        .module('WAM')
        .service('pageService', pageService);


    function pageService($http) {
        this.findPageByWebsiteId = findPageByWebsiteId;
        this.findPageById = findPageById;
        this.deletePage= deletePage;
        this.createPage= createPage;
        this.updatePage = updatePage;



        function findPageByWebsiteId(websiteId) {

            var url = "/api/assignment/graduate/user/:userId/website/"+websiteId +"/page";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function updatePage(pageId,page){

            var url = "/api/assignment/graduate/page/"+pageId;
            return $http.put(url,page)
                .then(function(response) {
                    return response.data;
                });
        }

        function createPage(page){
            var url="/api/assignment/graduate/website/:websiteId/page";
            return $http.post(url,page)
                .then(function (response) {
                    return response.data;
                });

        }

        function deletePage(pageId) {
            var url ="/api/assignment/graduate/page/"+pageId;
            return $http.delete(url)
                .then(function(response) {
                    return response.data;
                });
        }

        function findPageById(pageId){
            var url="/api/assignment/graduate/page/"+pageId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }



    }
})();