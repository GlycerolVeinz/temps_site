import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function loadConfiguration() {
    let client;
    
    try {
        client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db("TemporaryFriends");
        const showsCollection = db.collection("Shows");

        const allShows = await showsCollection.find().toArray();

        return NextResponse.json(allShows);
    } catch (error) {
        console.error("Error loading configuration:", error);
        return NextResponse.json([], { status: 500 });
    } finally {
        if (client) {
            await client.close();
        }
    }
}
