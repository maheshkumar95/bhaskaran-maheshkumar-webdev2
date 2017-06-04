(function () {
    angular
        .module('WAM')
        .service('widgetService', widgetService);



    function widgetService($http){
        this.findWidgetById = findWidgetById;
        this.findAllWidgetsForPage = findAllWidgetsForPage;
        this.deleteWidget = deleteWidget;
        this.updateWidget = updateWidget;
        this.createWidget = createWidget;


        /*function linkFunction(element,pageId){
            var url ='/api/assignment/graduate/page/'+pageId+'/widget?initial=index1&final=index2';
            return $http.put(url)
                .then(function (response) {
                    return response.data;

                });

        }*/

        function deleteWidget(widgetId) {
            var url="/api/assignment/graduate/widget/"+widgetId;
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
            var url="/api/assignment/graduate/page/"+pageId +"/widget";
            return $http.get(url)
                .then(function (response) {
                    return response.data;

                });
        }

        function createWidget(pageId){
            var url="/api/assignment/graduate/page/"+pageId+"/widget";
            return $http.post(url,widget)
                .then(function (response) {
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