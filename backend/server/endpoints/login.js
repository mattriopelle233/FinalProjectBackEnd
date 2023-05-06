import User from '../../db/models/User.js'

let findUser = async function(name){
    return User.findOne({ username: name }).then(result => {return result});
}

function loginUser(app) {
    app.post("/login", async(request, response) => {

        const {name, pass} = request.body

        let userToken = findUser(name);
        userToken.then(async function(result){
            if(result == null){
                response.status(500).send({
                    message: "Username not found.",
                });
            }
            else{
                if(result.password == pass){
                    response.send({
                        userId: result._id
                    });
                }
                else{
                    response.status(500).send({
                        message: "Password incorrect for this username.",
                        result: result,
                    });
                }
            }
        });
    })
}

export default loginUser;
 