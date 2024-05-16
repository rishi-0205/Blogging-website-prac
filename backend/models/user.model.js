import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    profilePicture: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&psig=AOvVaw3sxrIcSSjP1FwAPskL7pm8&ust=1715925909841000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPChv6TAkYYDFQAAAAAdAAAAABAE",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
