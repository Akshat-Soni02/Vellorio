import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"serverApi"
    }).then(() => console.log("Database Connect Successfully"))
    .catch((err) => console.log(`DB didn't connect having error ${err}`));
}