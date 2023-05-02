// const mongoose = require("mongoose");
// require("dotenv").config();

import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

async function db_connect() {

	// Connection using mongoose
	// console.log(process.env)
	mongoose
		.connect(process.env.DB_CONNECTION_URI)
		.then((res) => {
			console.log("Successfully connected to MongoDB Atlas!");
			return res;
		})
		.catch((error) => {
			console.log("404: Unable to connect to MongoDB Atlas!");
			console.error(error);
		});
}

export default db_connect;
// module.exports = db_connect;
