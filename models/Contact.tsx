import { timeStamp } from "console";
import mongoose, { Schema, model, models } from "mongoose";

const ContactSchema = new Schema({
  name: {
    type: String,
    required: [false, "Name is required"],
  },
  email: {
    type: String,
    required: [false, "Email is required"],
  },
  message: {
    type: Date,
    required: [false, "Message is required"],
    select: true,
  },
});

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
