(function () {
    angular
        .module('WAM')
        .controller('pageNewController', pageNewController);

    function pageNewController($routeParams, $location, pageService) {
        var model = this;

        model.websiteId = $routeParams("websiteId");


        model.createPage = createPage;


        function createPage(page) {
            page.pageId = model.websiteId;
            pageService.createPage(page);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId +'/page');
        }

    }
})();