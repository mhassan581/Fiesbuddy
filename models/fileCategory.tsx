import { timeStamp } from "console";
import mongoose, { Schema, model, models } from "mongoose";

const FileCategorySchema = new Schema({

  title: {
    type: String,
    required: true
  },



});

const FileCategory = models.FileCategory || model("FileCategory", FileCategorySchema);

export default FileCategory;
