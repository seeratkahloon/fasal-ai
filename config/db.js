const mongoose = require("mongoose");

//const MONGO_URI = "mongodb+srv://kahloonseerat5_db_user:fH9chbdfhXbS8lb@cluster0.aqqkxho.mongodb.net/fasalai?retryWrites=true&w=majority";
const MONGO_URI = "mongodb://kahloonseerat5_db_user:6cUyEHTEhPALpRGa@ac-qiac1fy-shard-00-00.aqqkxho.mongodb.net:27017,ac-qiac1fy-shard-00-01.aqqkxho.mongodb.net:27017,ac-qiac1fy-shard-00-02.aqqkxho.mongodb.net:27017/fasalai?ssl=true&replicaSet=atlas-kqcq9j-shard-0&authSource=admin";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;