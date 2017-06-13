var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    dateCreated: {type: Date, default: Date.now}
}, {collection: "graduate_project_user"});

module.exports = userSchema;