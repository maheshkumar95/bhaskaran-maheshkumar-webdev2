var app = require('../../../express');



app.get("/api/assignment/graduate/user/:userId/website/:websiteId/page", findPageByWebsiteId);
app.get("/api/assignment/graduate/page/:pageId", findPageById);
app.put("/api/assignment/graduate/page/:pageId", updatePage);
app.delete("/api/assignment/graduate/page/:pageId", deletePage);
app.post("/api/assignment/graduate/website/:websiteId/page", createPage);

var pages = [{"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
    {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
    {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}];


function createPage(req,res){
    var page=req.body;
    page._id =(new Date()).getTime() + "";
    pages.push(page);
    res.send(page);
}


function deletePage(req,res){
    for(var w in pages) {
        if(pages[w]._id === req.params.pageId) {
            pages.splice(w, 1);
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function updatePage(req,res){
    var page = req.body;
    for(var w in pages){
        if(pages[w]._id === req.params.pageId){
            pages[w] = page;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}


function findPageById(req,res){
    for (var w in pages) {
        if(pages[w]._id === req.params.pageId) {
            res.send(pages[w]);
            return;
        }
    }
    res.sendStatus(404);

}
function findPageByWebsiteId(req,res) {

    var results = [];
    for (var v in pages) {
        if (pages[v].websiteId === req.params.websiteId) {
            //pages[v].created = new Date();
            //pages[v].accessed = new Date();

            results.push(pages[v]);

        }
    }
    res.send(results);
}