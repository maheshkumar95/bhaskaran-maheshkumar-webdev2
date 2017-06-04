const app = require('../../../express');

var websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
];

app.get("/api/assignment/graduate/user/:userId/website", findAllWebsitesForUser);
app.get("/api/assignment/graduate/website/:websiteId", findWebsiteById);
app.put("/api/assignment/graduate/website/:websiteId", updateWebsite);
app.delete("/api/assignment/graduate/website/:websiteId", deleteWebsite);
app.post("/api/assignment/graduate/website",createWebsite);

function createWebsite(req,res){
    var website=req.body;
    website._id =(new Date()).getTime() + "";
    websites.push(website);
    res.send(website);
}



function deleteWebsite(req,res){
    for(var w in websites) {
        if(websites[w]._id === req.params.websiteId) {
            websites.splice(w, 1);
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function updateWebsite(req,res){
    var website = req.body;
    for(var w in websites){
        if(websites[w]._id === req.params.websiteId){
            websites[w]=website;
            res.sendStatus(200);
            return;

           // websites[w].name = website.name;
          // websites[w].description = website.description;
        }
    }
    res.sendStatus(404);
}


function findWebsiteById(req, res){
    for (var w in websites) {
        if(websites[w]._id === req.params.websiteId) {
            res.send(websites[w]);
            return;
        }
    }
    res.sendStatus(404);
}


function findAllWebsitesForUser(req, res) {
    var results = [];

    for(var v in websites) {
        if(websites[v].developerId === req.params.userId) {
            results.push(websites[v]);
        }
    }

    res.json(results);
}
