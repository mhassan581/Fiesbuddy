import Competitor from "@/models/Competitor";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToMongoDB } from "@/utils/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    if (!req.body) {
      return res.status(400).json({ error: "Data is missing" });
    }

    const { name, clubID } = req.body;

    try {
      const createdCompetitor = await Competitor.create({
        name: name,
        clubID: clubID
      });

      return res.status(201).json({
        success: true,
        result: createdCompetitor
      });
    } catch (err) {
      //return res.status(400).json({ error: err.message });
    }
  } else if (req.method === "GET") {
    try {
      const competitors = await Competitor.aggregate([
        {$lookup:{
          from: "clubs",
            localField: "clubID",
            foreignField: "_id",
            as: "clubID",

        }}
      ])
      return res.status(200).json(competitors);
    } catch (error) {
      console.log(error);
     // return res.status(400).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
