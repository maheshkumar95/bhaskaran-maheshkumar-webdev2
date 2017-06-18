var mongoose = require('mongoose');

var pageSchema = mongoose.Schema({
    _website: {type: mongoose.Schema.Types.ObjectId, ref: "GraduateWebsiteModel"},
    name : {type:String, required:true},
    title : String,
    description : String,
    widgets:[{type: mongoose.Schema.Types.ObjectId, ref: "GraduateWidgetModel"}],
    dateCreated:{type: Date, default: Date.now}
}, {collection: "graduate_page"});


module.exports = pageSchema;