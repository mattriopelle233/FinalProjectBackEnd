import mongoose from 'mongoose';
import User from './model/User.js';

mongoose.connect('mongodb+srv://QrCodes:CSCI4448@dbqrcode.ijm9nu4.mongodb.net/test');

var loginUser = async function(name, pass){
    let userToken = findUser(name);
    userToken.then(async function(result){
        if(result == null){
            console.log("Username not found.");
        }
        else{
            if(result.password == pass){
                console.log("Login verification successful");
            }
            else{
                console.log("Password incorrect for this username.");
            }
        }
    });
}

let findUser = async function(name){
    return User.findOne({ username: name }).then(result => {return result});
}

export default loginUser;