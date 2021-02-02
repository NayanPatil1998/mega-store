import Mongoose from 'mongoose';

const initdb = async () => {

    if(Mongoose.connections[0].readyState){
        console.log("Already Connected")
        return;
    }

    Mongoose.connect("mongodb://localhost:27017/megashop", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    Mongoose.connection.on("connected", ()=> {
        console.log("connected to mongoDB")
    })
    Mongoose.connection.on("error", (err)=> {
        console.log("err", err);
    })

}

export default initdb