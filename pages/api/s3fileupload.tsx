import { NextApiRequest, NextApiResponse } from "next";
import fileUpload from "@/models/fileUpload";
import S3 from "aws-sdk/clients/s3";
import { connectToMongoDB } from "@/utils/mongodb";

const s3 = new S3({
  region: process.env.AWSDEFAULTREGION,
  accessKeyId: process.env.AWSACCESSKEYID,
  secretAccessKey: process.env.AWSSECRETACCESSKEY,
  signatureVersion: "v4",
});

const upload = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    let { title, name, type, eventID, fileCategory } = req.body;

    const fileParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: Date.now().toString() + "_" + name,
      Expires: 600,
      ContentType: type,
    };

    const url = await s3.getSignedUrlPromise("putObject", fileParams);
    const parsedUrl = new URL(url);
    const fileUrl = parsedUrl.origin + parsedUrl.pathname;
    console.log(fileUrl);
    // res.status(200).json({ url });

    connectToMongoDB().catch((err) => res.json(err));
    const uploadedFile = await fileUpload.create({
      title: title,
      file: fileUrl,
      event: eventID,
      fileCategory: fileCategory,
    });

    res.json({ data: uploadedFile, url });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb", // Set desired value here
    },
  },
};

export default upload;
