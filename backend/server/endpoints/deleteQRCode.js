import QRCodeModel from '../../db/models/QRCode.js';

function deleteQRCode(app){
    app.post("/delete_qr", (request, response) => {
        const {_id} = request.body
        if(!_id){
            response.status(400).send({
                message:"Please send the id of the QR you would like to delete."
            })
        }
        QRCodeModel.findByIdAndDelete({_id: _id})
        .then((result) => {
            response.status(200).send({
                message: "Deleted Successfully!",
                result: result
            })
        })
        .catch((err) =>{
            response.status(500).send({
                message:"Deletion failed! Try again",
                error: JSON.stringify(err)
            })
        })
    })
}

export default deleteQRCode;