import Result from "@/models/Result";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToMongoDB } from "@/utils/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    if (!req.body) {
      return res.status(400).json({ error: "Data is missing" });
    }

    const { compID, eventID } = req.body;

    try {
      const createdCompetitor = await Result.create({
        compID: compID,
        eventID: eventID
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
        const competitors = await Result.aggregate([
            {
              $lookup: {
                from: "competitors",
                localField: "compID",
                foreignField: "_id",
                as: "compID",
              },
            },
            {
              $unwind: {
                path: "$compID",
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $lookup: {
                from: "clubs",
                localField: "compID.clubID",
                foreignField: "_id",
                as: "competitors.clubID",
              },
            },
            {
              $unwind: {
                path: "$competitors.clubID",
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $lookup: {
                from: "events",
                localField: "eventID._id",
                foreignField: "_id",
                as: "eventID",
              },
            },
            {
              $unwind: {
                path: "$eventID",
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $project: {
                "_id": 1,
                "eventTitle": "$eventID.title",
                "competitorName": "$compID.name",
                "Club_Name":"$competitors.clubID.title",
              },
            },
          ]);
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
