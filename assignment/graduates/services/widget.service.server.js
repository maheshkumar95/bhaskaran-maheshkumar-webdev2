const app = require('../../../express');

var multer = require('multer'); // npm install multer --save
var upload = multer({ dest: __dirname+'/../../../public/assignment/graduate/uploads' });

app.post ("/api/upload", upload.single('myFile'), uploadImage);
app.get ("/api/assignment/graduate/page/:pageId/widget",findAllWidgetsForPage);
app.get ("/api/assignment/graduate/widget/:widgetId",findWidgetById);
app.put("/api/assignment/graduate/widget/:widgetId",updateWidget);
app.delete("/api/assignment/graduate/widget/:widgetId",deleteWidget);
app.post("/api/assignment/graduate/page/:pageId/widget/",createWidget);
//app.put("/api/assignment/graduate/page/:pageId/widget/:widgetId",linkFunction);




var widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/"},
    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E" }];


//function linkFunction(req,res){
//    var widget=req.body;
//}

function createWidget(req,res){
    var widget=req.body;
    var widgetType = req.body.widgetType;
    widget._id = (new Date()).getTime() + "";
    widget.pageId = req.params.pageId;
    widget.widgetType = widgetType;
    widgets.push(widget);
    res.send(widget);
}


function findWidgetById(req,res){
    for (var w in widgets) {
        if(req.params.widgetId === widgets[w]._id) {
            res.send(widgets[w]);
            return;
        }
    }res.sendStatus(404);
}

function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;


    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    widget = findWidgetById(widgetId);
    widget.url = '/assignment/graduate/uploads/'+filename;

   // var callbackUrl   = "/assignment/graduate/index.html#!/widget/345";
    var callbackUrl = "/assignment/graduate/user/"+userId+"/website/"+websiteId +"/page/"+pageId+"/widget";
    res.redirect(callbackUrl);
}



function deleteWidget(req,res){
    for(var w in widgets)
    {
        if(widgets[w]._id === req.params.widgetId)
        {
            widgets.splice(w,1);
        }
        res.sendStatus(200);
        return;
    }
    res.sendStatus(404);
}

function updateWidget(req,res) {
    var widget=req.body;
    for (var w in widgets) {
        if (widgets[w]._id === widget._id) {
            widgets[w]=widget;
            res.sendStatus(200);
            return;
        }
    }res.sendStatus(404);
}



function findAllWidgetsForPage(req,res){

var results=[];
for(var v in widgets){
    if(widgets[v].pageId === req.params.pageId){
        results.push(widgets[v]);
    }
}res.send(results);
}