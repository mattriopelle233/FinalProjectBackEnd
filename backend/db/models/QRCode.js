import mongoose from "mongoose";

const QRCode = new mongoose.Schema({
    type: String,
    name: {
		type: String,
		required: false,
		unique: false,
	},
    qrCode: {
		type: String,
		required: [true, "Please provide a QR Code!"],
		unique: false,
	},
    user_id: {
		type: mongoose.Types.ObjectId,
		required: [true, "Please provide a user ID!"],
		unique: false,
	},
})
  
const QRCodeModel = mongoose.model.QR_Codes || mongoose.model("QR_Codes", QRCode);

export default QRCodeModel;
