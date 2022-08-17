import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://Admin:admin123@cluster0.34o7q8a.mongodb.net/?retryWrites=true&w=majority";

const connection = {};

async function connect(){
    if(connection.isConnected){
        console.log("connected Successfully")
        return;
    }else{
        console.log("Not Connected")
    }

    const db = await mongoose.connect(MONGO_URI);

    connection.isConnected = db.connections[0].readyState;
}

export default connect;