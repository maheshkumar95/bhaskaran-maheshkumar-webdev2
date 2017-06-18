(function () {
    angular
        .module('WAM')
        .controller('websiteEditController', websiteEditController);
    
    function websiteEditController($routeParams,
                                   $location,
                                   currentUser,
                                   websiteService) {
        var model = this;

        model.userId = currentUser._id;
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
            if(website.name === null || website.name === '' || typeof website.name === 'undefined') {
                model.error = 'Website name is required';
                return;
            }
            websiteService
                .updateWebsite(model.websiteId, website)
                .then(function () {
                    $location.url('/website');
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
                    $location.url('/website');
                });

        }

    }
})();