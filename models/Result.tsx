import mongoose, { Schema, model, models } from "mongoose";

const ResultSchema = new Schema({
  compID: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Competitor is required"],
    ref: "competitor",
  },
  eventID: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Event ID is required"],
    ref: "event", 
  },
});

const Result = models.Result || model("Result", ResultSchema);

export default Result;
