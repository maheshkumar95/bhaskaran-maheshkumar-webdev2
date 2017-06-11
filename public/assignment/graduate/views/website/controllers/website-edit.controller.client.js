(function () {
    angular
        .module('WAM')
        .controller('websiteEditController', websiteEditController);
    
    function websiteEditController($routeParams,
                                   $location,
                                   websiteService) {
        var model = this;

        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.deleteWebsite = deleteWebsite;
        model.updateWebsite = updateWebsite;


        function init() {
            websiteService.findAllWebsitesForUser(model.userId)
                .then(renderAllWebsites);
            websiteService.findWebsiteById(model.websiteId)
                .then(renderWebsiteById);
            websiteService
                .findWebsiteById(model.websiteId)
                .then(renderWebsite, errorWebsite);

        }
        init();

        function renderWebsiteById(website){
            model.web=website;
        }

        function renderAllWebsites(websites){
            model.websites=websites;
        }


        function updateWebsite(website) {
            websiteService
                .updateWebsite(model.websiteId, website)
                .then(function () {
                    $location.url('/user/'+model.userId +'/website');
                });
        }
        function renderWebsite(website)
        {
            model.website=website;
        }


        function errorWebsite(webiste){
            model.error="Website not found";
        }

        function deleteWebsite(websiteId){

            websiteService
                .deleteWebsite(model.websiteId,model.userId)
                .then(function(){
                    $location.url('/user/'+model.userId+'/website');
                });

        }

    }
})();