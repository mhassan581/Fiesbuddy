import { timeStamp } from "console";
import  mongoose, { Schema, model, models } from "mongoose";

const EventSchema = new Schema({
 
  title: {
    type: String,
    required: [true, "Eventname is required"],
    minLength: [4, "Eventname should be atleast 4 characters long"],
    maxLength: [30, "Eventname should be less than 30 characters"],
  },
  description:{
    type:String,
    required:false
  },
  date: {
    type: Date,
    required: [true, "Password is required"],
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
  rules:[{
type:String,
required:false,
  }]

});

const Event = models.Event || model("events", EventSchema);

export default Event;
