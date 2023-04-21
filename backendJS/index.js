const { MongoClient } = require('mongodb');

const ur = "mongodb+srv://QrCodes:CSCI4448@dbqrcode.ijm9nu4.mongodb.net/test";
const client = new MongoClient(ur);

async function run() {
    try{
        await client.connect();
        const db = client.db
    }
    catch{
        
    }
}