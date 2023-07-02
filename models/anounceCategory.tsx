import { timeStamp } from "console";
import mongoose, { Schema, model, models } from "mongoose";

const AnnouncementCategorySchema = new Schema({

  title: {
    type: String,
    required: true
  },



});

const AnnouncementCategory = models.AnnouncementCategory || model("AnnouncementCategory", AnnouncementCategorySchema);

export default AnnouncementCategory;
