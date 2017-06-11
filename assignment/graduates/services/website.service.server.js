const app = require('../../../express');
var websiteModel = require('../models/website/website.model.server');


app.get("/api/assignment/graduate/user/:userId/website", findAllWebsitesForUser);
app.get("/api/assignment/graduate/user/:userId/website/:websiteId", findWebsiteById);
app.put("/api/assignment/graduate/user/:userId/website/:websiteId", updateWebsite);
app.delete("/api/assignment/graduate/user/:userId/website/:websiteId", deleteWebsite);
app.post("/api/assignment/graduate/user/:userId/website",createWebsite);



function createWebsite(req, res) {
    var website = req.body;
    var userId = req.params.userId;
    websiteModel
        .createWebsite(userId, website)
        .then(function (website) {
            res.json(website);
        });
}


function deleteWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var userId = req.params.userId;
    websiteModel
        .deleteWebsite(userId, websiteId)
        .then(function (status) {
            res.json(status);
        });
}

function updateWebsite(req, res) {
    var website = req.body;
    websiteModel
        .updateWebsite(req.params.websiteId, website)
        .then(function (status) {
            res.send(status);
        });
}


function findWebsiteById(req, res){
    var websiteId = req.params['websiteId'];
    websiteModel
        .findWebsiteById(websiteId)
        .then(function (website) {
            res.json(website);
        });

}

function findAllWebsitesForUser(req, res) {
    websiteModel
        .findAllWebsitesForUser(req.params.userId)
        .then(function (websites) {
            res.json(websites);
        });
}
