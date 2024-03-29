const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
	username: {type: String, unique: true, required: true},
	email: {type: String, unique: true, required: true},
	password: {type: String, required: true},
	created: {type: Date, default: Date.now()},
	isActivated: {type: Boolean, default: false},
	activationLink: {type: String},
})

module.exports = model('User', UserSchema);