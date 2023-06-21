import mongoose, { Schema, model, models } from "mongoose";

const CompetitorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  clubID: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Club ID is required"],
    ref: "club", // Use "Club" instead of "clubs"
  },
});

const Competitor = models.Competitor || model("Competitor", CompetitorSchema);

export default Competitor;
