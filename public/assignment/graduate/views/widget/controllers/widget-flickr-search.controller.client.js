(function () {
    angular
        .module('WAM')
        .controller('flickrImageSearchController', flickrImageSearchController);

    function flickrImageSearchController(flickrService,$routeParams,$location,currentUser, widgetService) {
        var model = this;
        model.websiteId=$routeParams['websiteId'];
        model.pageId=$routeParams['pageId'];
        model.widgetId = $routeParams['widgetId'];
        model.userId=currentUser._id;



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

        // function selectPhoto(photo){
        //    flickrService
        //         .selectPhoto(photo,model.websiteId,model.pageId,model.userId, model.widget);
        //
        //            $location.url('/user/'+model.userId +'/website/' +model.websiteId +'/page/' +model.pageId +'/widget/');
        // }

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

        function selectPhoto(photo) {
            var url = "https://farm" +photo.farm +".staticflickr.com/" +photo.server;
            url += "/" +photo.id +"_" +photo.secret +"_b.jpg";
            widget.url = url;
            widgetService
                .updateWidget(model.websiteId,model.pageId,model.widgetId,widget)
                .then(function(){
                    $location.url('/website/'+model.websiteId +'/page/'+model.pageId+'/widget/'+widgetId);
                });
        }

    }
})();