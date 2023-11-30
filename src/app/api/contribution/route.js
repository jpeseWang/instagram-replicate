import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Contribution from "@/models/Contribution";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connect();

    const contribution = await Contribution.find(username && { username });

    return new NextResponse(JSON.stringify(contribution), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newContribution = new Contribution(body);

  try {
    await connect();

    await newContribution.save();

    return new NextResponse("Contribution has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
