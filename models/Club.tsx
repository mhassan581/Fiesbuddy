import { timeStamp } from "console";
import mongoose, { Schema, model, models } from "mongoose";

const ClubSchema = new Schema({

  title: {
    type: String,
    required: true
  },



});

const Club = models.Club || model("Club", ClubSchema);

export default Club;
