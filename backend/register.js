import mongoose from 'mongoose';
import User from './model/User.js';


mongoose.connect('mongodb+srv://QrCodes:CSCI4448@dbqrcode.ijm9nu4.mongodb.net/test');

var registerUser = async function(name, pass){
    let userToken = findUser(name);
    userToken.then(async function(result){
        if(result == null){
            const person = new User({
                username: name,
                password: pass,
            });
            await person.save();
            const firstArt = await User.findOne({'username' : name});
            console.log(firstArt);
        }
            else{
                console.log("Username already exists. Choose another");
            }
})
}

let findUser = async function(name){
    return User.findOne({ username: name }).then(result => {return result});
}
export default registerUser;