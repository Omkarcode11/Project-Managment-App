import { Schema, model, models, Types } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    tasks: {
      type: [Types.ObjectId],
      ref: "Task",
    },
  },
  { timestamps: true, versionKey: false }
);

const User = models.User || model("User", userSchema);

export default User;
