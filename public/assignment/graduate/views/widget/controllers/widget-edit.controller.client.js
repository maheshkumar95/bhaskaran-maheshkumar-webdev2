(function () {
    angular
        .module('WAM')
        .controller('widgetEditController', widgetEditController);

    function widgetEditController($routeParams, $location, widgetService) {
        var model = this;

        model.pageId=$routeParams['pageId'];
        model.websiteId=$routeParams['websiteId'];
        model.userId=$routeParams['userId'];
        model.widgetId = $routeParams['widgetId'];


        model.deleteWidget = deleteWidget;



        function init() {
            model.widget = widgetService.findWidgetById(model.widgetId);
            console.log("Hello");
        }
        init();

        function deleteWidget(widgetId) {
            widgetService.deleteWidget(widgetId);
            $location.url('/user/'+model.userId +'/website/'+model.websiteId +'/page/'+model.pageId +'/widget');
        }


        function updateWidget(widgetId) {
            widgetService.updateWidget(widgetId);
            $location.url('/user/'+model.userId +'/website/' +model.websiteId +'/page' +model.pageId +'/widget');
        }

    }
})();