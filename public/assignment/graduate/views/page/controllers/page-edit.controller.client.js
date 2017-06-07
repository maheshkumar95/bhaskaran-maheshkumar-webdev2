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
        model.updatePage = updatePage;

        function init() {
            pageService.findPageByWebsiteId(model.websiteId)
                .then(function(pages){
                    model.pages=pages;
                });
            pageService
                .findPageById(model.pageId)
                .then(function(page){
                    model.page=page;
                });

        }
        init();

        function deletePage(pageId) {
            pageService
                .deletePage(model.pageId)
                .then(function(){
                    $location.url('/user/'+model.userId +'/website/' +model.websiteId +'/page');

                });

        }

        function updatePage(page) {
            pageService
                .updatePage(model.pageId,page)
                .then(function(){
                    $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
                });
        }

        }
})();