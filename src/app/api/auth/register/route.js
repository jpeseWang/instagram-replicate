import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const {
    avatar,
    fullname,
    username,
    email,
    dob,
    career,
    phone,
    password,
    subscription,
  } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    avatar,
    fullname,
    username,
    email,
    dob,
    career,
    phone,
    password: hashedPassword,
    subscription,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
