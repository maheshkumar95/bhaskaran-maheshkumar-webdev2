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


        function createWidget(widgetType) {
            widget={};
            widget.type = widgetType;
            widgetService
                .createWidget(model.pageId,widget)
                .then(function(widget){
                    var widgetId= widget._id;
                    $location.url('/user/'+model.userId+'/website/'+model.websiteId +'/page/'+model.pageId+'/widget/'+widgetId);
                });


        }
    }
})();