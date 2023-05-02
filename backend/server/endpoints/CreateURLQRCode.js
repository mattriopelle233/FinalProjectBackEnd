import QRCodeModel from '../../db/models/QRCode.js';
import QRCode from 'qrcode';

function createURLQRCode(app) {

    app.post("/create_url_qr_code", async(request, response) => {
        const {data, name, user_id} = request.body

        if(!data){
            response.status(500).send({
                message: "URL is required",
            });
        }
        //Create URL QR Code
        const qrCode = await QRCode.toDataURL(data)
        const newQRCode = new QRCodeModel({
            name: name,
            type: "URL",
            qrCode: qrCode,
            user_id: user_id
        });
        
        //Save QR Code
        newQRCode.save()
        .then((result) => {
            response.status(201).send({
                message: "Success",
                result: result,
            });
        })
        .catch((error) => {
            response.status(500).send({
                message: "Failure",
                error: JSON.stringify(error)
            });
        })

    })
}

export default createURLQRCode;