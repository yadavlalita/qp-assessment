import mongoose from "mongoose";

const connectDB = (url: any) => {
    mongoose.connect("mongodb://13.232.126.6:27017/Grocery");
}

export default connectDB