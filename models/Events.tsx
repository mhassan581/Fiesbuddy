import { timeStamp } from "console";
import  mongoose, { Schema, model, models } from "mongoose";

const EventSchema = new Schema({
 
  title: {
    type: String,
    required: [false, "Eventname is required"],
    minLength: [4, "Eventname should be atleast 4 characters long"],
    maxLength: [30, "Eventname should be less than 30 characters"],
  },
  description:{
    type:String,
    required:false
  },
  date: {
    type: Date,
    required: [false, "Password is required"],
    select: true,
  },
  time:{
    type: String,
    required: [false, "Password is required"],
    select: true,
  },

  competitor: {
    type: mongoose.Schema.Types.ObjectId,
    required: [false, "Event role is required"],
    select: true,
  },




});

const Event = models.Event || model("Event", EventSchema);

export default Event;
