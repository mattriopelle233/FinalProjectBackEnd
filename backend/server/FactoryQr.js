import createContactQRCode from "./endpoints/CreateContactQRCode";
import createURLQRCode from "./endpoints/CreateURLQRCode";

function factoryQr(app, type) {
    if(type == "contact"){
        createContactQRCode(app);
    }
    else if(type == "url"){
        createURLQRCode(app);
    }
    else{
        console.log("Type mismatch. QR code does not exist")
    }
}