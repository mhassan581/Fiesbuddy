import { NextApiRequest, NextApiResponse } from "next";
import fileUpload from "@/models/fileUpload";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
import { connectToMongoDB } from "@/utils/mongodb";

export const config = {
  api: {
    bodyParser: false,
  },
};

const nfname = [] ? ["undefined"] : ["null"];

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/uploads");
    options.filename = (name, ext, path, form) => {
      const newFname = Date.now().toString() + "_" + path.originalFilename;

      nfname.length = 0;
      nfname?.push(newFname);

      return newFname;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    connectToMongoDB().catch((err) => res.json(err));
    await fs.readdir(path.join(process.cwd() + "/uploads"));
    const { fields } = await readFile(req, true);
    const { title, eventID,fileCategory } = fields; // Accessing eventID and title from fields

    console.log("Event ID:", eventID[0]);
    console.log("File Name:", nfname[0]);
    console.log("File Category:", fileCategory[0]);
    console.log("Title:", title[0]);

    const uploadedFile = await fileUpload.create({
      title: title[0],
      file: nfname[0],
      event: eventID[0],
      fileCategory:fileCategory[0],
    });
    res.json({ data: uploadedFile });
  } catch (error) {
    console.log(error);
    await fs.mkdir(path.join(process.cwd() + "/uploads"));
  }
};

export default handler;
