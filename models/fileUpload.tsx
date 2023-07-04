import mongoose, { Schema, model, models } from "mongoose";

const fileUploadSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    file: {
      type: String,
      required: true,
      trim:true
    },
    fileCategory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "FileCategory", 
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Event ID is required"],
      ref: "event",
    },
  },
  {
    timestamps: true,
  }
);

const fileUpload = models.fileUpload || model("fileUpload", fileUploadSchema);

export default fileUpload;
