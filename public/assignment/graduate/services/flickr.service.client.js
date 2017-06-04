(function () {
    angular
        .module('WAM')
        .service('flickrService', flickrService);



    function flickrService($http,widgetService) {
        this.searchPhotos=searchPhotos;
        this.selectPhoto=selectPhoto;
        var key = "982f6ad99c343265512f2b6629c3ad4c";
        var secret = "cb0b4954b32c0cf1";
        var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";


        function selectPhoto(photo,websiteId,pageId,widgetId) {
            var url = "https://farm" +photo.farm +".staticflickr.com/" +photo.server;
            url += "/" + photo.id +"_" + photo.secret +"_b.jpg";
            widgetService
                .updateWidget(websiteId, pageId, widgetId, {url: url})
                .then(function(widget){
                    return widget;
                });
        }

            function searchPhotos(searchTerm) {
            var url = urlBase
                .replace("API_KEY", key)
                .replace("TEXT", searchTerm);
            return $http.get(url);
        }


    }

})();