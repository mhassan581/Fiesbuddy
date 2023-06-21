import Event from "@/models/Events";
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

    const { title, date, description, time } = req.body;

    const CreateEvent = Event.create({
      title: title,
      description: description,
      time: time,
      date: date,
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
    const GetEvent = Event.find({})
      .then((result) => {
        return res.status(201).json({
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
