import { MongoClient } from "mongodb";
import { NextResponce } from "next/server";
import path from "path";
import { promise as fs } from "fs/promises";

export async function loadConfiguration() {
    try {
        const client = await MongoClient.connect(process.env.MONGODB_URI);

        const db = client.db(process.env.MONGODB_DB);
        const config = db.collection(process.env.MONGODB_CONFIG_COLLECTION).findOne({_id : 1});


        if (!config) {
            throw new Error("Configuration collection not found");
        }

        delete config._id;
        return NextResponce.json(config);
    } catch (err) {

    }
}