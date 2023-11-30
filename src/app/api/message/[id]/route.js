import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Message from "@/models/Message";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await Message.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

// export const DELETE = async (request, { params }) => {
//   const { id } = params;

//   try {
//     await connect();

//     await User.findByIdAndDelete(id);

//     return new NextResponse("Post has been deleted", { status: 200 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

export const PUT = async (request, { params }) => {
  const { id } = params;
  const newInbox = await request.json();

  try {
    await connect();
    const post = await Message.findByIdAndUpdate(id);
    if (!post) {
      return new NextResponse("Inbox not found", { status: 404 });
    }
    post.inbox = post.inbox.concat(newInbox);
    await post.save();

    return new NextResponse("Inbox has been updated", { status: 200 });
  } catch (err) {
    return new NextResponse("Not match", { status: 500 });
  }
};
