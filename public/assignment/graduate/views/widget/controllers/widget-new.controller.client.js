(function () {
    angular
        .module('WAM')
        .controller('widgetNewController', widgetNewController);

    function widgetNewController($routeParams,
                                  $location,currentUser,
                                  widgetService) {
        var model = this;

        model.pageId=$routeParams['pageId'];
        model.websiteId=$routeParams['websiteId'];
        model.userId=currentUser._id;

        model.createWidget = createWidget;


        function createWidget(widgetType) {

            widget={};
            widget.type = widgetType;
            // if(widget.name === null || widget.name === '' || typeof widget.name === 'undefined') {
            //     model.error = 'Widget name is required';
            //     return;
            // }

            widgetService
                .createWidget(model.pageId,widget)
                .then(function(widget){
                    var widgetId= widget._id;
                    $location.url('/website/'+model.websiteId +'/page/'+model.pageId+'/widget/'+widgetId);
                });
        }
    }
})();