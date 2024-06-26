import mongoose, { Schema } from "mongoose";

const bioSchema = new Schema(
  {
    bio: String,
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Bio = mongoose.models.Bio || mongoose.model("Bio", bioSchema);

export default Bio;
