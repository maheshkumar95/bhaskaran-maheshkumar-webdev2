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
            model.widgets = widgetService.findAllWidgetsByPageId(model.pageId);
        }
        init();

        function createWidget(widgetType) {
            widget = {};

            var widgetid = widgetService.createWidget(widgetType, model.pageId)._id;
            $location.url('/user/'+model.userId+'/website/'+model.websiteId + '/page/'+model.pageId +'/widget/'+ widgetid);
        }
    }
})();