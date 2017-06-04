(function () {
    angular
        .module('WAM')
        .controller('widgetListController', widgetListController);





    function widgetListController($sce,$location,$routeParams, widgetService) {
        var model = this;
        model.pageId=$routeParams['pageId'];
        model.websiteId=$routeParams['websiteId'];
        model.userId=$routeParams['userId'];


        model.trust = trust;
        model.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
        model.widgetUrl = widgetUrl;


        function init() {
            widgetService
                .findAllWidgetsForPage(model.pageId)
                .then(renderWidgets);

        }
        init();

        /*function wdDraggable(){
            widgetService.linkFunction(element,model.pageId)
                .then(sortable);
            return {
                link:linkFunction
            }
        }*/


        /*function sortable(){
            model.widgets=$(element).sortable;
        }*/
        function renderWidgets(widgets) {
            model.widgets = widgets;
           // $('#widget-list').sortable;
        }

        function widgetUrl(widget) {
            var url = 'views/widget/templates/widget-'+widget.widgetType.toLowerCase()+'.view.client.html';
            return url;
        }

        function getYouTubeEmbedUrl(linkUrl) {
            var embedUrl = "https://www.youtube.com/embed/";
            var linkUrlParts = linkUrl.split('/');
            embedUrl += linkUrlParts[linkUrlParts.length - 1];
            return $sce.trustAsResourceUrl(embedUrl);
        }
        
        function trust(html) {
            // scrubbing the html
            return $sce.trustAsHtml(html);
        }
    }
})();