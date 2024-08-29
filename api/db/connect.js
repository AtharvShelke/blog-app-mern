import mongoose from 'mongoose';

const connect = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error:\n${error.message}`)
        process.exit(1)
    }
}
export default connect;