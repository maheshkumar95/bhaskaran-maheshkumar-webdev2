(function () {
    angular
        .module('WAM')
        .controller('widgetEditController', widgetEditController);

    function widgetEditController($routeParams, $location, currentUser, widgetService) {
        var model = this;

        model.pageId=$routeParams['pageId'];
        model.websiteId=$routeParams['websiteId'];
        model.userId=currentUser._id;
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
                    $location.url('/website/' +model.websiteId +'/page/'+model.pageId +'/widget');
                });

        }


        function updateWidget(widget) {
            if(widget.name === null || widget.name === '' || typeof widget.name === 'undefined') {
                model.error = 'Widget name is required';
                return;
            }
            widgetService
                .updateWidget(model.widgetId,widget)
                .then(function(){
                    $location.url('/website/' +model.websiteId +'/page/' +model.pageId +'/widget');
                });

        }

    }
})();