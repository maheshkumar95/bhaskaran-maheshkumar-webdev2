var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server');
var pageModel = mongoose.model('GraduatePageModel', pageSchema);
var websiteModel = require('../website/website.model.server');



pageModel.createPage=createPage;
pageModel.findPageByWebsiteId=findPageByWebsiteId;
pageModel.findPageById=findPageById;
pageModel.deletePage=deletePage;
pageModel.updatePage=updatePage;
pageModel.addWidget=addWidget;
pageModel.deleteWidget=deleteWidget;



module.exports = pageModel;


function deleteWidget(widgetId,pageId){
    return pageModel
        .findById(pageId)
        .then(function(page){
            var index = page.widgets.indexOf(widgetId);
            page.widgets.splice(index, 1);
            return page.save();
        });
}

function addWidget(pageId,widgetId){
    return pageModel
        .findById(pageId)
        .then(function (page) {
            page.widgets.push(widgetId);
            return page.save();
        });
}

function updatePage(pageId,page){
    return pageModel
        .update({_id: pageId}, {$set: page});
}


function deletePage(pageId,websiteId){
    return pageModel
        .remove({_id: pageId})
        .then(function (status) {
            return websiteModel
                .deletePage(websiteId, pageId);
        });
}

function findPageById(pageId){
    return pageModel
        .findById(pageId);

}

function findPageByWebsiteId(websiteId) {
    return pageModel
        .find({_website: websiteId})
        .populate('_website')
        .exec();
}

function createPage(websiteId,page){
    page._website= websiteId;
    return pageModel
        .create(page)
        .then(function (page) {
            return websiteModel
                .addPage(websiteId, page._id)
        });
}





