(function () {
    angular
        .module('WAM')
        .service('widgetService', widgetService);



    function widgetService($http){

        var currentPageId;

        this.findWidgetById = findWidgetById;
        this.findAllWidgetsForPage = findAllWidgetsForPage;
        this.deleteWidget = deleteWidget;
        this.updateWidget = updateWidget;
        this.createWidget = createWidget;
        this.sortWidget=sortWidget;


        function sortWidget(start, end) {
            var url="/api/page/:pageId/widget?initial=index1&final=index2";
            url = url
                .replace('pageId', currentPageId)
                .replace('index1', start)
                .replace('index2', end);
            return $http.put(url);

        }
        function deleteWidget(widgetId,pageId) {
            var url="/api/assignment/graduate/page/"+pageId+"/widget/"+widgetId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;

                });
        }

        function findWidgetById(widgetId) {
            var url="/api/assignment/graduate/widget/" +widgetId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;

                });
        }

        function findAllWidgetsForPage(pageId){
            currentPageId = pageId;
            var url="/api/assignment/graduate/page/"+pageId +"/widget";
            return $http.get(url)
                .then(function (response) {
                    return response.data;

                });
        }

        function createWidget(pageId,widget){
            var url="/api/assignment/graduate/page/"+pageId+"/widget";
            return $http.post(url,widget)
                .then(function(response) {
                    return response.data;
                });
        }

        function updateWidget(widgetId,widget){
            var url="/api/assignment/graduate/widget/"+widgetId;
            return $http.put(url,widget)
                .then(function (response) {
                    return response.data;

                });
        }}


})();