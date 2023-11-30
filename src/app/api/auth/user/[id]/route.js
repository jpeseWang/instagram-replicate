import { NextResponse } from "next/server";
import connect from "@/utils/db";
import User from "@/models/User";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const user = await User.findById(id);
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await User.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  const newSubscription = await request.json();

  try {
    await connect();
    const user = await User.findByIdAndUpdate(id);
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    user.subscription = newSubscription.subscription;
    await user.save();

    return new NextResponse("User has been updated", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
