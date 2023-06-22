import FileCategory from "@/models/fileCategory";
import { IUser } from "@/types";
import { connectToMongoDB } from "@/utils/mongodb";
import { hash } from "bcryptjs";

import { NextApiRequest, NextApiResponse } from "next";
import mongoose, { Types } from "mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    if (!req.body) {
      return res.status(400).json({ error: "Data is missing" });
    }

    const { title } = req.body;

    const CreateFileCategory = FileCategory.create({
      title: title,
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
    const FileCategoryEvent = FileCategory.find({})
      .then((result) => {
        return res.status(201).json({
          success: true,
          result,
        });
      })
      .catch((err) => {
        return res.status(400).json({ error: err });
      });
  } else if (req.method === "DELETE") {
    try {
      const did = new Types.ObjectId(req.body.id);
      console.log("File to delete IDe:", did);

      const deletedFile = await FileCategory.findByIdAndDelete(did);

      if (!deletedFile) {
        return res.status(404).json({ error: "File not found" });
      }

      // Delete file from the folder

      return res.status(200).json({ message: "File deleted successfully" });
    } catch (error) {
      console.log(error);
      // return res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
