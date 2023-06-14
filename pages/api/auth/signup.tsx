import User from "@/models/User";
import { IUser } from "@/types";
import { connectToMongoDB } from "@/utils/mongodb";
import { hash } from "bcryptjs";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    if (!req.body) {
      return res.status(400).json({ error: "Data is missing" });
    }

    const { userName, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({ error: "User Already Exist" });
    } else {
      if (password.length < 6) {
        return res
          .status(409)
          .json({ error: "Password should be 6 characters long" });
      }

      const hashedPassword = await hash(password, 12);

      User.create({ userName, email, password: hashedPassword })
        .then((result) => {
          return res.status(201).json({
            success: true,
            result,
          });
        })
        .catch((err) => {
          return res.status(400).json({ error: err });
        });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
