(function () {
    angular
        .module('WAM')
        .controller('flickrImageSearchController', flickrImageSearchController);

    function flickrImageSearchController(flickrService,$routeParams,$location, widgetService) {
        var model = this;
        model.websiteId=$routeParams['websiteId'];
        model.pageId=$routeParams['pageId'];
        model.widgetId = $routeParams['widgetId'];
        model.userId=$routeParams['userId'];



        model.searchPhotos=searchPhotos;
        model.selectPhoto=selectPhoto;

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

        function selectPhoto(photo){
           flickrService
                .selectPhoto(photo,model.websiteId,model.pageId,model.userId, model.widget);

                $location.url('/user/'+model.userId +'/website/' +model.websiteId +'/page/' +model.pageId +'/widget');

        }

         function searchPhotos(searchTerm) {
            flickrService
                .searchPhotos(searchTerm)
                .then(function(response) {
                    data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length - 1);
                    data = JSON.parse(data);
                    model.photos = data.photos;
                });
        }

    }
})();