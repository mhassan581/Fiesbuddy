import { timeStamp } from "console";
import mongoose, { Schema, model, models } from "mongoose";

const RuleSchema = new Schema({

  title: {
    type: String,
required:true
  },
  eventID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'events',
    required:true
  }
});

const Rules = models.Rules || model("rules", RuleSchema);

export default Rules;
