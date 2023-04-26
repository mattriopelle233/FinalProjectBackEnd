import QRCodeModel from '../../db/models/QRCode.js';

function updateQRCodeName(app){
    app.post("/update_qr_name", (request, response) => {
        const {name, _id} = request.body
        if(!_id){
            response.status(400).send({
                message:"Please send the id of the QR you would like to edit."
            })
        }
        if(!name){
            response.status(400).send({
                message:"Please send the new name of the QR!"
            })
        }
        QRCodeModel.findByIdAndUpdate({_id: _id}, {name: name})
        .then((result) => {
            response.status(200).send({
                message: "Updated Name Successfully!",
                result: result
            })
        })
        .catch((err) =>{
            response.status(500).send({
                message:"Update failed! Try again",
                error: JSON.stringify(err)
            })
        })
    })
}

export default updateQRCodeName;