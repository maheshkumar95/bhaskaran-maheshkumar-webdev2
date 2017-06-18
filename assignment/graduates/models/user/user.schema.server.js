var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {type: String, unique: true, required:true},
    password: {type:String,required:true},
    firstName: String,
    lastName: String,
    email: String,
    google: {
        id:    String,
        token: String
    },
    websites: [{type: mongoose.Schema.Types.ObjectId, ref: "GraduateWebsiteModel"}],
    dateCreated: {type: Date, default: Date.now}
}, {collection: "graduate_user"});

module.exports = userSchema;