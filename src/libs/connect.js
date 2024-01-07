import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {

        if (mongoose.connection.readyState === 1) {
            // Already connected, do nothing
            console.log('Already connected to MongoDB');
            return;
        }
        else {
            await mongoose.connect(process.env.MONGODB_URI)
            console.log('connected to mongodb database')
        }

    } catch (error) {
        throw new Error('Error while connecting', error)
    }
}
