import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

import NftSchema from "../../data/models/nftSchema";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await mongoose.connect(process.env.MONGODB_URI!);
    mongoose.set("strictQuery", false);

    try {
        const result = await NftSchema.find();

        res.status(200).json({
            success: true,
            message: "Data inserted successfully!",
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "An error occured while updating the DB!",
            error,
            data: null,
        });
    }
};

export default handler;