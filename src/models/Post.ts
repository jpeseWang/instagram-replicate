import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    authorID: {
      type: String,
      required: true,
    },

    comment: [
      {
        userID: {
          type: String,
        },
        content: {
          type: String,
        },
        date: {
          type: String,
        },
      },
      { timestamps: true },
    ],
  },
  { timestamps: true },
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Post || mongoose.model("Post", postSchema);
