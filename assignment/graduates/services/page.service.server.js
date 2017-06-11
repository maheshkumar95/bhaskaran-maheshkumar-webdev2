var app = require('../../../express');
var pageModel = require('../models/page/page.model.server');



app.get("/api/assignment/graduate/website/:websiteId/page", findPageByWebsiteId);
app.get("/api/assignment/graduate/page/:pageId", findPageById);
app.put("/api/assignment/graduate/page/:pageId", updatePage);
app.delete("/api/assignment/graduate/website/:websiteId/page/:pageId", deletePage);
app.post("/api/assignment/graduate/website/:websiteId/page", createPage);



function createPage(req,res){
    var page=req.body;
    var websiteId=req.params.websiteId;
    pageModel
        .createPage(websiteId,page)
        .then(function(page){
            res.send(page);
        });

}


function deletePage(req,res) {
    var pageId=req.params.pageId;
    var websiteId=req.params.websiteId;
    pageModel
        .deletePage(pageId,websiteId)
        .then(function(status){
            res.send(status);
        });
}

function updatePage(req,res) {
    var pageId= req.params.pageId;
    var page=req.body;
    pageModel
        .updatePage(pageId,page)
        .then(function(status){
            res.send(status)
        });
}


function findPageById(req,res) {
    var pageId = req.params.pageId;
    pageModel
        .findById(pageId)
        .then(function (page) {
            res.send(page);
        });
}


function findPageByWebsiteId(req, res) {
    var websiteId = req.params.websiteId;
    pageModel
        .findPageByWebsiteId(websiteId)
        .then(function (pages) {
            res.json(pages);
        });
}