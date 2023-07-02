import Announcement from "@/models/announcement";
import { connectToMongoDB } from "@/utils/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose, { Types } from "mongoose";
import { Server } from "socket.io";
let io;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    const Announcements = await Announcement.aggregate([
      {
        $match: {
          category: new Types.ObjectId(req.body.id),
        },
      },

      {
        $lookup: {
          from: "announcementcategories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
    ]);
    return res.status(200).json({
      success: true,
      result: Announcements,
    });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
