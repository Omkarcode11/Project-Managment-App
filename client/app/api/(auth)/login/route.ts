import { signToken } from "@/lib/auth/auth";
import { connect } from "@/lib/db";
import User from "@/lib/models/Users";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  //implment login controller with jwt token
  try {
    const body = await req.json();
    const { email, password } = body;
    //validate email and password
    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({ message: "Missing email or password", status: false }),
        { status: 400 }
      );
    }
    //check if user exists and password is correct
    await connect();

    const user = await User.findOne({ email });

    //if not return error
    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid email or password", status: false }),
        { status: 401 }
      );
    }

    let isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid email or password", status: false }),
        { status: 401 }
      );
    }

    //if yes, generate jwt token
    let token = signToken({ id: user.id, email: user.email, name: user.name });
    //return token to client

    return new NextResponse(
      JSON.stringify({
        message: "Logged in successfully",
        status: true,
        token,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Error logging in", status: false }),
      { status: 500 }
    );
  }
};
