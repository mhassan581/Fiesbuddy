import Event from "@/models/Events";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToMongoDB } from "@/utils/mongodb";
import mongoose, { Types } from "mongoose";
import path from "path";
const { promises: fs } = require("fs");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    try {
      const id = new Types.ObjectId(req.body.id);

      const events = await Event.aggregate([
        {
          $match: {
            _id: new Types.ObjectId(req.body.id),
          },
        },
      ]).then((result) => {
        return res.status(201).json({
          success: true,
          result,
        });
      });
      // console.log("Matched events:", events);
    } catch (error) {
      console.log(error);
      // return res.status(400).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
