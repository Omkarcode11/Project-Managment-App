import mongoose from "mongoose";
import User from "./models/Users";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";

export const connect = async () => {
  let connectionState = mongoose.connection.readyState;

  if (connectionState == 1) {
    console.log("Database is connected");
    return;
  }

  if (connectionState == 2) {
    console.log("connecting...");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected");
    await User.create({
      name: "omkar",
      email: "omkar@gmail.com" + Math.random() * 5000,
      password: "123456", // You should hash this password before storing it in the database.
    });
  } catch (err: any) {
    console.log(err);
    throw new Error("Error :", err);
  }
};
