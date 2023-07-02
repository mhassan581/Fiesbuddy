import { timeStamp } from "console";
import mongoose, { Schema, model, models } from "mongoose";

const AnnouncementSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "AnnouncementCategory ID is required"],
    ref: "AnnouncementCategory", 
  },

  time: {
    type: String,
    required: true
  },


});

const Announcement = models.Announcement || model("Announcement", AnnouncementSchema);

export default Announcement;
