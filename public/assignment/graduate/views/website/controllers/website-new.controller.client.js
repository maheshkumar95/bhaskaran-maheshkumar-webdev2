(function () {
    angular
        .module('WAM')
        .controller('websiteNewController', websiteNewController);
    
    function websiteNewController($routeParams,
                                   $location,
                                   websiteService) {
        var model = this;

        model.userId = $routeParams['userId'];

        model.createWebsite=createWebsite;

        function init(){
            websiteService
                .findAllWebsitesForUser(model.userId)
                .then(renderAllWebsites);
        }
         init();

        function createWebsite(website) {
            website.developerId = model.userId;
            websiteService
                .createWebsite(model.userId,website)
                .then(function () {
                    $location.url('/user/' + model.userId + '/website');
                });
        }

        function renderAllWebsites(websites){
            model.websites = websites;
            }


    }
})();