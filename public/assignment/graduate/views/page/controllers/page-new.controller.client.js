(function () {
    angular
        .module('WAM')
        .controller('pageNewController', pageNewController);

    function pageNewController($routeParams, $location,currentUser, pageService) {
        var model = this;

        model.websiteId = $routeParams["websiteId"];
        model.pageId = $routeParams["pageId"];
        model.userId=currentUser._id;

        model.createPage = createPage;

        function init() {
            //pageService.findPageByWebsiteId(model.websiteId);
            pageService
                .findPageByWebsiteId(model.websiteId)
                .then(renderPages);

        }
        init();

        function createPage(page){

            if(page.name === null || page.name === '' || typeof page.name === 'undefined') {
                model.error = 'Page name is required';
                return;
            }
            page.websiteId = model.websiteId;
            pageService
                .createPage(model.websiteId,page)
                .then(function(){
                    $location.url('/website/'+model.websiteId +'/page');
                });
        }

        function renderPages(pages) {
            model.pages = pages;
        }

    }
})();