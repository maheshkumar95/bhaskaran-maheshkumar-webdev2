(function(){
    angular
        .module("WAM")
        .controller("pageListController",pageListController);

    function pageListController($routeParams,currentUser,pageService){
        var model=this;
        model.websiteId=$routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];
        model.userId=currentUser._id;

        function init() {
            //model.pages = pageService.findPageByWebsiteId(model.websiteId);
            pageService
                .findPageByWebsiteId(model.websiteId)
                .then(renderPages);
        }
        init();

        function renderPages(pages) {
            model.pages = pages;
        }
    }

})();