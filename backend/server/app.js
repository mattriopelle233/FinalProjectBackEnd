import express from 'express';
import body_parser from "body-parser";
import db_connect from '../db/db_connect.js';
import createURLQRCode from './endpoints/CreateURLQRCode.js';
import createContactQRCode from './endpoints/CreateContactQRCode.js';
import loginUser from './endpoints/login.js';
import registerUser from './endpoints/register.js';
import deleteQRCode from './endpoints/deleteQRCode.js';
import getQRCodesByUser from './endpoints/getQRCodesByUser.js';
import updateQRCodeName from './endpoints/updateQRCodeName.js';

const app = express();
app.use(body_parser.json({ limit: "16mb" }));

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
	//Set the second part of this to be the location of your frontend app.
	res.setHeader("Access-Control-Allow-Origin", "https://localhost:3000");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	next();
});


// This port configuration are for testing only
const port = process.env.PORT || 3003;

app.listen(port, () => {
	console.log("Listening on port ", port);
});

//Mongo DB COnnection
db_connect()


//Routes
createURLQRCode(app)
createContactQRCode(app)
loginUser(app)
registerUser(app)
deleteQRCode(app)
getQRCodesByUser(app)
updateQRCodeName(app)

