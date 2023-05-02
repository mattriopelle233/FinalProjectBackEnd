import QRCodeModel from '../../db/models/QRCode.js';
import QRCode from 'qrcode';
import vCardFactory from 'vcards-js';

function createContactQRCode(app) {
    app.post("/create_contact_qr_code", async(request, response) => {

        const {name, contact, user_id} = request.body
        const {firstName, lastName, middleName, organization, workPhone, email, homePhone, cellPhone} = contact

        // Create a vCard
        const card = new vCardFactory();

        //Error check
        if((!firstName && !lastName) && !organization){
            response.status(500).send({
                message: "Name or Organization is required",
            });
        }
        //Error Check
        if(!workPhone && !email && !cellPhone && !homePhone){
            response.status(500).send({
                message: "A phone or email is required",
            });
        }
        //Create card with Info
        card.firstName = firstName || '';
        card.lastName = lastName || '';
        card.middleName = middleName || '';
        card.organization = organization || '';
        card.workPhone = workPhone || '';
        card.email = email || '';
        card.homePhone = homePhone || '';
        card.cellPhone = cellPhone || '';

        // Generate a vCard string
        const vCardString = card.getFormattedString();
        
        //Create QR
        const qrCode = await QRCode.toDataURL(vCardString)
        const newQRCode = new QRCodeModel({
            name: name,
            qrCode: qrCode,
            type: "Contact",
            user_id: user_id
        });
        //Upload Qr
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

export default createContactQRCode;
 