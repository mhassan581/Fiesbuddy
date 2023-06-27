import fileUpload from "@/models/fileUpload";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToMongoDB } from "@/utils/mongodb";
import mongoose, { Types } from "mongoose";
import path from "path";
const { promises: fs } = require("fs");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    try {
      const did = new Types.ObjectId(req.body.id);
      console.log("File to delete IDe:", did);

      const deletedFile = await fileUpload.findByIdAndDelete(did);

      if (!deletedFile) {
        return res.status(404).json({ error: "File not found" });
      }

      return res.status(200).json({ message: "File deleted successfully" });
    } catch (error) {
      console.log(error);
      // return res.status(400).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
