import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    avatar: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },

    phone: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    about: {
      type: String,
      required: false,
    },
    message: [
      {
        senderID: {
          type: String,
          required: true,
        },
        receiverID: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        date: {
          type: String,
          required: true,
        },
      },
      { timestamps: true },
    ],
  },
  { timestamps: true },
);

//If the User collection does not exist create a new one.
export default mongoose.models.User || mongoose.model("User", userSchema);
