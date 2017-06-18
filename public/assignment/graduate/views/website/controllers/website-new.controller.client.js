(function () {
    angular
        .module('WAM')
        .controller('websiteNewController', websiteNewController);
    
    function websiteNewController($routeParams,
                                   $location,
                                   currentUser,
                                   websiteService) {
        var model = this;

        model.userId = currentUser._id;

        model.createWebsite=createWebsite;

        function init(){
            websiteService
                .findAllWebsitesForUser(model.userId)
                .then(renderAllWebsites);
        }
         init();

        function createWebsite(website) {
            if(website.name === null || website.name === '' || typeof website.name === 'undefined') {
                model.error = 'Website name is required';
                return;
            }

            website.developerId = model.userId;
                websiteService
                .createWebsite(model.userId,website)
                .then(function () {
                    $location.url('/website');
                });
        }

        function renderAllWebsites(websites){
            model.websites = websites;
            }


    }
})();