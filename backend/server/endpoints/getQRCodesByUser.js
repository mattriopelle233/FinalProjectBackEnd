import QRCodeModel from '../../db/models/QRCode.js';

function getQRCodesByUser(app){
    app.post("/get_qr_codes", (request, response) => {
        const {user_id} = request.body
        if(!user_id){
            response.status(400).send({
                message:"Please send the id of the user."
            })
        }

        QRCodeModel.find({user_id: user_id})
        .then((result) => {
            if(result.length === 0){
                response.status(200).send({
                    message: "No QR Codes exist for this user!",
                    result: result
                });
            }
            else{
                response.status(200).send({
                    message: "Found QR Codes!",
                    result: result
                });
            } 
        })
        .catch((err) =>{
            response.status(500).send({
                message:"Deletion failed! Try again",
                error: JSON.stringify(err)
            });
        })
    })
}

export default getQRCodesByUser;