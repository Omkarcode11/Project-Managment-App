import { connect } from "@/lib/db";
import User from "@/lib/models/Users";
import mongoose, { models } from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// export const GET = async () => {
//   await connect();
//   try {
//     const user = await User.find({});
//     return new NextResponse(JSON.stringify(user), { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse("Error fetching data", { status: 500 });
//   }

//   // return new NextResponse(user);
// };

// export const POST = async (req: Request, res: Response) => {
//   try {
//     const body = await req.json();
//     const { name, email, password } = body;
//     await connect();
//     const user = await User.create({ name, email, password });
//     return new NextResponse(JSON.stringify({ message: "User Created", user }));
//   } catch (err: any) {
//     console.log(err);
//     return new NextResponse("Error creating user :" + err.message, {
//       status: 500,
//     });
//   }
// };

// export const PATCH = async (req: Request, res: Response) => {
//   try {
//     let body = await req.json();
//     let { id, newName } = body;

//     if (!newName || !newName.trim().length) {
//       return new NextResponse(
//         JSON.stringify({ message: "new Name is invalid" }),
//         { status: 500 }
//       );
//     }

//     if (!mongoose.isValidObjectId(id)) {
//       return new NextResponse(JSON.stringify({ message: "Invalid User id" }), {
//         status: 400,
//       });
//     }

//     await connect();
//     let user = await User.findByIdAndUpdate(
//       id,
//       { name: newName },
//       { new: true }
//     );

//     if (!user) {
//       return new NextResponse(
//         JSON.stringify({ message: "User not found", status: false }),
//         { status: 404 }
//       );
//     }

//     return new NextResponse(JSON.stringify(user), { status: 200 });
//   } catch (err: any) {
//     console.log(err.message);
//     return new NextResponse(
//       JSON.stringify({ error: err.message, status: false }),
//       { status: 500 }
//     );
//   }
// };

export const POST = async (req: Request, res: Response) => {
  try {
    let body = await req.json();
    let { name, email, password } = body;

    if (!name || !email || !password) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid credentials" }),
        { status: 400 }
      );
    }

    await connect();
    let user = await User.findOne({ email });
    if (user) {
      return new NextResponse(
        JSON.stringify({ message: "User already exists", status: false }),
        { status: 400 }
      );
    }

    let bcryptPassword = await bcrypt.hash(password, 10);

    // Generate JWT token here
    await User.create({ name, email, password: bcryptPassword });
    return new NextResponse(
      JSON.stringify({ message: "User Created", status: true }),
      { status: 200 }
    );
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(
      JSON.stringify({ error: err.message, status: false }),
      { status: 500 }
    );
  }
};
