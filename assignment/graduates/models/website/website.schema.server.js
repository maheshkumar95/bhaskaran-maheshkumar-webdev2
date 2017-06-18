var mongoose = require('mongoose');

var websiteSchema = mongoose.Schema({
    _user: {type: mongoose.Schema.Types.ObjectId, ref: "GraduateUserModel"},
    name: {type:String,required:true},
    description: String,
    dateCreated: {type: Date, default: Date.now},
    pages:[{type: mongoose.Schema.Types.ObjectId, ref: "GraduatePageModel"}]
}, {collection: 'graduate_website'});

module.exports = websiteSchema;