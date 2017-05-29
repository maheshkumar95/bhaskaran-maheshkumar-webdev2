(function () {
    angular
        .module('WAM')
        .controller('widgetNewController', widgetNewController);

    function widgetNewController($routeParams,
                                  $location,
                                  websiteService) {
        var model = this;

        model.pageId=$routeParams['pageId'];
        model.websiteId=$routeParams['websiteId'];
        model.userId=$routeParams['userId'];

        model.createWidget = createWidget;

        function init() {
            model.widgets = websiteService.findAllWidgetsByPageId(model.pageId);
        }
        init();

        function createWidget(widget) {
            widget.widgetId = model.pageId;
            widgetService.createWidget(widget);
            $location.url('/user/'+model.userId+'/website'+model.websiteId + '/page'+model.pageId +'/widget');
        }
    }
})();