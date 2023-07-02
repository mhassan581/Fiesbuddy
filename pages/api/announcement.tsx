import Announcement from "@/models/announcement";
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

    const { title, time, category } = req.body;

    const CreateAnnouncement = Announcement.create({
      title: title,
      time: time,
      category: category,
    })
      .then((result) => {
        return res.status(201).json({
          success: true,
          result,
        });
      })
      .catch((err) => {
        return res.status(400).json({ error: err });
      });
  } else if (req.method === "GET") {
    const Announcements = await Announcement.aggregate([
      {
        $lookup: {
          from: "announcementcategories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
    ]);
    return res.status(200).json(Announcements);
  } else if (req.method === "PUT") {
    if (!req.body) {
      return res.status(400).json({ error: "Data is missing" });
    }

    const { announcementId, title, time, category } = req.body;

    Announcement.findOneAndUpdate(
      { _id: announcementId },
      { title, time, category },
      { new: true }
    )
      .then((result) => {
        if (!result) {
          return res.status(404).json({ error: "Announcement not found" });
        }

        return res.status(200).json({
          success: true,
          result,
        });
      })
      .catch((err) => {
        return res.status(400).json({ error: err });
      });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
