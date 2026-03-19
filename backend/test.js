const mongoose = require("mongoose");

const MONGO_URI ="mongodb+srv://rugved:admin1234@cluster0.s2etzlg.mongodb.net/test?retryWrites=true&w=majority"


// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    process.exit(0); // exit after success
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:");
    console.error(error.message);
    process.exit(1); // exit with failure
  });