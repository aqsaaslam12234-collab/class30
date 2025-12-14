import mongoose from "mongoose";
 const MONGO_URL = process.env.MONGO_URL || "mongodb://locathost:27017/mydatabase";

 const connectDB = async () => {
   try {
     await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB");
   } catch (error) {
     console.error("Error connecting to MongoDB:", error);
     process.exit(1);
   }

 };
 const disconnectDB = async () => {
   try {
     await mongoose.disconnect();   
     console.log ("Disconnected from MongoDB");
    } catch (error) {
        console.error("Error disconnecting from MongoDB:", error);
    }
    };
    export default connectDB;