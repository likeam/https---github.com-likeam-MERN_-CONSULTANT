import mongoose from "mongoose";

export const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL, { dbName: "FAROOQ_MESSAGE" })
    .then(() => {
      console.log("Connected to DataBase");
    })
    .catch((err) => {
      console.log("Some Error while connecting to DataBase: ", err);
    });
};
