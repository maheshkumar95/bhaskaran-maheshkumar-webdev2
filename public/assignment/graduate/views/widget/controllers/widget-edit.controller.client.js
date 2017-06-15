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
        model.updateWidget = updateWidget;



        function init() {
            widgetService
                .findWidgetById(model.widgetId)
                .then(renderWidget);
        }
        init();

        function renderWidget(widget)
        {
            model.widget=widget;
        }

        function deleteWidget(widget) {
            widgetService
                .deleteWidget(model.widgetId,model.pageId)
                .then(function(){
                    $location.url('/user/'+model.userId +'/website/' +model.websiteId +'/page/'+model.pageId +'/widget');
                });

        }


        function updateWidget(widget) {
            widgetService
                .updateWidget(model.widgetId,widget)
                .then(function(){
                    $location.url('/user/'+model.userId +'/website/' +model.websiteId +'/page/' +model.pageId +'/widget');
                });

        }

    }
})();