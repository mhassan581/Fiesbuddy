import { timeStamp } from "console";
import  mongoose, { Schema, model, models } from "mongoose";

const CompetitorSchema = new Schema({
 
  name: {
    type: String,
    required: [true, "Name is required"],
  
  },
 

  clubID: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Name  is required"],
    ref:"clubs",
    // select: true,
  },

});

const Competitor = models.Competitor || model("competitor", CompetitorSchema);

export default Competitor;
