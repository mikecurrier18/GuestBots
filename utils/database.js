import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"test_db_name",
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
        isConnected=true;
        console.log('now connected to mongoDB')
    } catch (error) {
        console.log(error);
    }
}