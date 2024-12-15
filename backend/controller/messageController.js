import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Fill All Fieds" });
    }

    await Message.create({ name, email, subject, message });
    res.status(200).json({
      success: true,
      message: "Message Sent Sucessfully",
    });
  } catch (error) {
    if (error.name === "ValidarionError") {
      let errorMessage = "";
      if (error.errors.name) {
        errorMessage += error.errors.name.message + " ";
      }
      if (error.errors.email) {
        errorMessage += error.errors.email.message + " ";
      }
      if (error.errors.subject) {
        errorMessage += error.errors.subject.message + " ";
      }
      if (error.errors.message) {
        errorMessage += error.errors.message.message + " ";
      }
      return res.status(400).json({ success: false, message: errorMessage });
    }

    return res.status(500).json({ success: false, message: "Unknown Error" });
  }
};
