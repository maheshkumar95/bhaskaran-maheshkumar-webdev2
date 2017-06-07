(function(){
    angular
        .module("wbdvDirectives" ,[])
        .directive("wbdvSortable", wbdvSortable);


    function wbdvSortable() {
        function linkFunction(scope, element) {
            var startIndex = -1;
            var stopIndex = -1;
            element
                .sortable({
                    axis: 'y',
                    handle: ".glyphicon-align-justify",
                    start: function (event, ui) {
                        startIndex = ui.item.index();
                    },

                    stop: function (event, ui) {
                        stopIndex = ui.item.index();
                        scope.widgetSortController.sort(startIndex, stopIndex);
                    }

                })
                .disableSelection();


        }
        return {
            scope:{},
            link: linkFunction,
            controller: widgetSortController,
            controllerAs: 'widgetSortController'
        };
    }


    function widgetSortController(widgetService){
        var model=this;
        model.sort = sort;

        function sort(start, end) {
            widgetService
                .sortWidget(start, end);

        }

    }
})();