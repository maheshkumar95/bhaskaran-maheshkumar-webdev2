var mongoose =require('mongoose');
var widgetSchema =require('./widget.schema.server');
var widgetModel = mongoose.model('GraduateWidgetModel', widgetSchema);
var userModel = require('../user/user.model.server');
var websiteModel = require('../website/website.model.server');
var pageModel = require('../page/page.model.server');

widgetModel.createWidget=createWidget;
widgetModel.findAllWidgetsForPage=findAllWidgetsForPage;
widgetModel.findWidgetById=findWidgetById;
widgetModel.deleteWidget=deleteWidget;
widgetModel.updateWidget=updateWidget;


module.exports = widgetModel;


function updateWidget(widgetId,widget){
    return widgetModel.update({_id: widgetId}, {$set: widget} ,{url:widget.url});
}
function deleteWidget(widgetId,pageId){
    return widgetModel
        .remove({_id:widgetId})
        .then(function(status){
            return pageModel
                .deleteWidget(widgetId,pageId);
        });
}

function findAllWidgetsForPage(pageId){
    return widgetModel
        .find({_page: pageId})
        .populate('_page')
        .exec();
}
function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

function createWidget(pageId,widget){
    widget._page=pageId;
    return widgetModel
        .create(widget)
        .then(function(widget){
            pageModel
                .addWidget(pageId,widget._id);
                 return widget;

        });
}