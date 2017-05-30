(function () {
    angular
        .module('WAM')
        .controller('widgetNewController', widgetNewController);

    function widgetNewController($routeParams,
                                  $location,
                                  widgetService) {
        var model = this;

        model.pageId=$routeParams['pageId'];
        model.websiteId=$routeParams['websiteId'];
        model.userId=$routeParams['userId'];

        model.createWidget = createWidget;

        function init() {
            model.widgets =findAllWidgetsByPageId(model.pageId);
        }
        init();

        function createWidget(widgetType) {
            widget ={};
            widget.widgetType = widgetType;
            widget.pageId = model.pageId;

            widgetService.createWidget(widget);
            $location.url('/user/'+model.userId+'/website'+model.websiteId + '/page'+model.pageId +'/widget');
        }
    }
})();