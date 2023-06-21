import fileUpload from "@/models/fileUpload";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToMongoDB } from "@/utils/mongodb";
import mongoose, { Types } from "mongoose";



const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    try {
    //   const id = new Types.ObjectId(req.body.id);
    //   console.log("Event ID:", id);

  
      const files = await fileUpload.aggregate([
        { $match: { event:new Types.ObjectId(req.body.id) } },

        {
          $lookup: {
            from: "events",
            localField: "event",
            foreignField: "_id",
            as: "event",
          },
        },
      
      ]);
  
      console.log("Matched Files:", files);
  
      return res.status(200).json(files);
    } catch (error) {
      console.log(error);
      // return res.status(400).json({ error: error.message });
    }
  }
  
  
  
  else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
