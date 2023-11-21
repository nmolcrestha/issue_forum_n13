import mongoose from "mongoose";

let isConnected: boolean = false;

// rajeshhamal r1WRfS9fLLSjheBd
export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("MISSING MONGODB_URL");
  }

  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "TestCluster",
    });

    isConnected = true;
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};
