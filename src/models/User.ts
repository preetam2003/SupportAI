import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    // Add more fields as needed for your application
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
