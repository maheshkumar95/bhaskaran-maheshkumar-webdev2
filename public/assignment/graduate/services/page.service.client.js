(function () {
    angular
        .module('WAM')
        .service('pageService', pageService);


    function pageService() {
        this.findPageByWebsiteId = findPageByWebsiteId;
        this.findPageById = findPageById;
        this.deletePage= deletePage;
        this.createPage= createPage;
        this.updatePage = updatePage;



        var pages = [{"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
            {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
            {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}];


        function findPageByWebsiteId(website_Id) {
            var results = [];
            for (var v in pages) {
                if (pages[v].websiteId === website_Id) {
                    pages[v].created = new Date();
                    pages[v].accessed = new Date();

                    results.push(pages[v]);
                }
            }
            return results;
        }

        function updatePage(pageId){
            for(var w in pages){
                if(pages[w]._id === pageId){
                    pages[w].name = page.name;
                    pages[w].title = page.title;
                }
            }
        }

        function createPage(page){
            page._id =(new Date()).getTime() + "";
            pages.push(page);
        }

        function deletePage(pageId) {
            var page = findPageById(pageId);
            var index = pages.indexOf(page);
            pages.splice(index, 1);
        }

        function findPageById(pageid){
            return pages.find(function (page) {
                return page._id === pageid;
            });

        }



    }
})();