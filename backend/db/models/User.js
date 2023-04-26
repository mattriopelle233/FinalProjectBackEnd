import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
		type: String,
		required: [true, "Please provide a username!"],
		unique: false,
	},
    password: {
		type: String,
		required: [true, "Please provide a password!"],
		unique: false,
	},
});

const User = model('User', userSchema);

export default User;