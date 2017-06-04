(function () {
    angular
        .module('WAM')
        .controller('pageNewController', pageNewController);

    function pageNewController($routeParams, $location, pageService) {
        var model = this;

        model.websiteId = $routeParams["websiteId"];
        model.userId = $routeParams['userId'];

        model.createPage = createPage;

        function init() {
            //pageService.findPageByWebsiteId(model.websiteId);
        }
        init();

        function createPage(page) {
            page.websiteId=model.websiteId;
            pageService
                .createPage(page)
                .then(function(){
                    $location.url('/user/'+model.userId+'/website/'+model.websiteId +'/page');
            });
        }

    }
})();