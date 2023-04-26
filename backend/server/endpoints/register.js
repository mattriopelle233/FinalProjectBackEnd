
import User from '../../db/models/User.js'

let findUser = async function(name){
    return User.findOne({ username: name }).then(result => {return result});
}

function registerUser(app) {
    app.post("/register", async(request, response) => {

        const {name, pass} = request.body

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
                response.status(201).send({
                    message: "Account created!",
                    result: firstArt
                });
            }
            else{
                response.status(500).send({
                    message: "Username already exists. Choose another.",
                });
            }
        })
    })
}

 
export default registerUser;