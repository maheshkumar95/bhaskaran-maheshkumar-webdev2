const app = require('../../../express');
var widgetModel = require('../models/widget/widget.model.server');

var multer = require('multer'); // npm install multer --save
var upload = multer({ dest: __dirname+'/../../../public/assignment/graduate/uploads' });

// app.post ("/api/assignment/graduate/uploads", upload.single('myFile'), uploadImage);
app.get ("/api/assignment/graduate/page/:pageId/widget",findAllWidgetsForPage);
app.get ("/api/assignment/graduate/widget/:widgetId",findWidgetById);
app.put("/api/assignment/graduate/widget/:widgetId",updateWidget);
app.delete("/api/assignment/graduate/widget/:widgetId",deleteWidget);
app.post("/api/assignment/graduate/page/:pageId/widget",createWidget);
// app.put("/api/page/:pageId/widget", orderWidgets);


// function orderWidgets(req,res){
//     var pageId = req.params.pageId;
//     var start = req.query.initial;
//     var end = req.query.final;
//     var count = 0;
//     for(var w in widgets)
//     {
//         if(widgets[w].pageId === pageId)
//         {
//             if (count === start)
//             {
//                 start = w;
//             }
//             if(count === end)
//             {
//                 end = w;
//             }
//             count ++;
//         }
//     }
//     widgets.splice(end, 0, widgets.splice(start, 1)[0]);
// }

function findWidgetById(req,res) {
    var widgetId = req.params.widgetId;
    widgetModel
        .findWidgetById(widgetId)
        .then(function (widget) {
            res.send(widget);
        });
}

// function uploadImage(req, res) {
//
//     var widgetId      = req.body.widgetId;
//
//     var width         = req.body.width;
//     var myFile        = req.file;
//
//     var userId = req.body.userId;
//     var websiteId = req.body.websiteId;
//     var pageId = req.body.pageId;
//
//     var originalname  = myFile.originalname; // file name on user's computer
//     var filename      = myFile.filename;     // new file name in upload folder
//     var path          = myFile.path;         // full path of uploaded file
//     var destination   = myFile.destination;  // folder where file is saved to
//     var size          = myFile.size;
//     var mimetype      = myFile.mimetype;
//
//    // widget = findWidgetById(widgetId);
//     widget={};
//     widget.url = '/assignment/graduate/uploads/'+filename;
//
//    // var callbackUrl   = "/assignment/graduate/index.html#!/widget/345";
//     var callbackUrl = "/assignment/graduate/index.html#!/user/"+userId+"/website/"+websiteId +"/page/"+pageId+"/widget/"+widgetId;
//     res.redirect(callbackUrl);
// }



function deleteWidget(req,res){
    var widgetId= req.params.widgetId;
    var pageId=req.params.pageId;
    widgetModel
        .deleteWidget(widgetId,pageId)
        .then(function(status){
            res.send(status);
        });
}

function updateWidget(req,res) {
    var widget = req.body;
    var widgetId = req.params.widgetId;
    widgetModel
        .updateWidget(widgetId,widget)
        .then(function (status) {
            res.send(status);

        });
}

function findAllWidgetsForPage(req,res) {
    var pageId=req.params.pageId;
    widgetModel
        .findAllWidgetsForPage(pageId)
        .then(function(pages){
           res.send(pages)
        });
}

function createWidget(req,res) {
    var widget = req.body;
    var pageId = req.params.pageId;
    widgetModel
        .createWidget(pageId,widget)
        .then(function(widget){
            res.send(widget);
        });
}
