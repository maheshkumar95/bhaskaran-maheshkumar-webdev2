(function () {
    angular
        .module('WAM')
        .service('widgetService', widgetService);



    function widgetService(){
        this.findWidgetById = findWidgetById;
        this.deleteWidget = deleteWidget;
        this.updateWidget = updateWidget;


        var widgets = [
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": '<p>Today we got <a href="http://io9.gizmodo.com/the-new-game-of-thrones-trailer-is-here-and-everyone-i-1795509917" target="_blank" rel="noopener">our first good look</a> at <em>Game of Thrones</em>’ seventh season, and boy howdy does it look like we’re in for some dark times ahead. But while the trailer is suitably cryptic, if you’ve been paying close attention to <a href="http://io9.gizmodo.com/everything-we-know-about-game-of-thrones-seventh-season-1788588295" target="_blank" rel="noopener">the rumors</a> surrounding this penultimate season, it paints an intriguing picture of the battles…<span class="read-more-placeholder"></span></p>'},
            { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        //function findWidgetById(widgetId){

        //

        // }

        function deleteWidget(widgetId) {
            var widget = findWidgetById(widgetId);
            var index = widgets.indexOf(widget);
            widgets.splice(index, 1);
        }

        function findWidgetById(widgetId) {
            for (var w in widgets)
            {
                if(widgetId === widgets[w]._id)
                {
                    return widgets[w];
                }
            }

        }



        function updateWidget(widgetId,widget){

            for(var w in widgets){
                if(widgets[w]._id === widgetId){

                    if(widget.widgetType=== "HEADING"){

                        widgets[w].name=widget.name;
                        widgets[w].text=widget.text;
                        widgets[w].size=widget.size;

                    }
                    else if(widget.widgetType=== "IMAGE"){
                        widgets[w].name=widget.name;
                        widgets[w].text=widget.text;
                        widgets[w].upload=widget.file;

                    }
                    else if(widget.widgetType=== "YOUTUBE"){

                        widgets[w].name=widget.name;
                        widgets[w].text=widget.text;
                        widgets[w].url=widget.url;
                        widgets[w].width=widget.width;

                    }
                    else if(widget.widgetType=== "HTML" ){
                        widgets[w].name=widget.name;
                        widgets[w].text=widget.text;
                        widgets[w].url=widget.url;
                        widgets[w].width=widget.width;

                    }
                }
            }
        }}


})();