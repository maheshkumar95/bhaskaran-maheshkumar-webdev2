(function () {
    angular
        .module('WAM')
        .service('widgetService', widgetService);



    function widgetService(){
        this.findWidgetById = findWidgetById;
        this.findAllWidgetsByPageId = findAllWidgetsByPageId;
        this.deleteWidget = deleteWidget;
        this.updateWidget = updateWidget;
        this.createWidget = createWidget;


        var widgets = [
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" }];

        function deleteWidget(widgetId) {
            for(var w in widgets)
            {
                if(widgets[w]._id === widgetId)
                {
                    widgets.splice(w,1);
                }
            }
        }

        function findWidgetById(widgetId) {
            for (var w in widgets) {
                if(widgetId === widgets[w]._id) {
                     return widgets[w];
                 }
            }

        }

        function findAllWidgetsByPageId(pageId){
            var results=[];
            for(var v in widgets){
                if(widgets[v].pageId === pageId){
                    results.push(widgets[v]);
                }
            }return results;
        }

        function createWidget(widgetType, pageId){
            widget._id = (new Date()).getTime() + "";
            widget.pageId=pageId;
            widget.widgetType = widgetType;
            widgets.push(widget);
            return widget
        }


        function updateWidget(widget){

            for(var w in widgets){
                if(widgets[w]._id === widget._id){

                    widgets[w].name=  widget.name;
                    widgets[w].text=  widget.text;
                    widgets[w].size=  widget.size;
                    widgets[w].url=   widget.url;
                    widgets[w].width= widget.width;
                    widgets[w].file=  widget.file;
                }
        }
    }}


})();