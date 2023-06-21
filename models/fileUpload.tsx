import  mongoose, { Schema, model, models } from "mongoose";

const fileUploadSchema = new mongoose.Schema(
    {
      file: {
        type: String,
        required: false,
      },
      event: {
        type: mongoose.Schema.Types.ObjectId,
        required: [false, "Event ID is required"],
        ref:"event"
      },
     
    },
    {
      timestamps: true,
    },
  );

const fileUpload = models.fileUpload || model("fileUpload", fileUploadSchema);

export default fileUpload;
