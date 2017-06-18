(function () {
    angular
        .module('WAM')
        .controller('pageEditController', pageEditController);

    function pageEditController($routeParams,
                                   $location,
                                   currentUser,
                                   pageService) {
        var model = this;


        model.pageId = $routeParams['pageId'];
        model.userId = currentUser._id;
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
                .deletePage(model.pageId,model.websiteId)
                .then(function(){
                    $location.url('/website/' +model.websiteId +'/page');

                });

        }

        function updatePage(page) {
            if(page.name === null || page.name === '' || typeof page.name === 'undefined') {
                model.error = 'Page name is required';
                return;
            }
            pageService
                .updatePage(model.pageId,page)
                .then(function(){
                    $location.url('/website/'+model.websiteId+'/page');
                });
        }

        }
})();