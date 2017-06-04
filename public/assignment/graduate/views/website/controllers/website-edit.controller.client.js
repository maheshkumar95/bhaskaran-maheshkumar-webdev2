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
           // model.websites = websiteService.findAllWebsitesForUser(model.userId);
            //model.website = websiteService.findWebsiteById(model.websiteId);
            websiteService
                .findWebsiteById(model.websiteId)
                .then(renderWebsite, errorWebsite);

        }
        init();


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
                .deleteWebsite(model.websiteId)
                .then(function(){
                    $location.url('/user/'+model.userId+'/website');
                });

        }

    }
})();