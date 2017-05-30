(function () {
    angular
        .module('WAM')
        .controller('pageEditController', pageEditController);

    function pageEditController($routeParams,
                                   $location,
                                   pageService) {
        var model = this;


        model.pageId = $routeParams['pageId'];
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.deletePage = deletePage;
        model.updatePage=updatePage;

        function init() {
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
            model.page = pageService.findPageById(model.pageId);
        }
        init();

        function deletePage(pageId) {
            pageService.deletePage(pageId);
            $location.url('/user/'+model.userId +'/website/' +model.websiteId +'/page');
        }

        function updatePage(page) {
            pageService.updatePage(page);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
        }

        }
})();