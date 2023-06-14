import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid Email"],
  },
  name: {
    type: String,
    required: [true, "Username is required"],
    minLength: [4, "Username should be atleast 4 characters long"],
    maxLength: [30, "Username should be less than 30 characters"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: true,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
