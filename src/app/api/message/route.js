import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Message from "@/models/Message";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connect();

    const mess = await Message.find(username && { username });

    return new NextResponse(JSON.stringify(mess), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newContribution = new Message(body);

  try {
    await connect();

    await newContribution.save();

    return new NextResponse("Message has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
