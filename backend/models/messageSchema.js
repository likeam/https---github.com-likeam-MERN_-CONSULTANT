import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required"],
    minLength: [3, "Name must contain atleast 3 letters"],
  },
  email: {
    type: String,
    required: [true, "Email Required"],
    validate: [validator.isEmail, "Please provide Valid Email"],
  },
  subject: {
    type: String,
    required: [true, "Subject Required"],
    minLength: [5, "Subject must contain atleast 5 letters"],
  },
  message: {
    type: String,
    required: [true, "Message Required"],
    minLength: [10, "Message must contain atleast 10 letters"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
