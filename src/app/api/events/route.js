"use server"
import { collection, dbConnect } from "@/app/lib/dbConnect"
const eventsCollection = await dbConnect(collection.EVENTS);

export const postEvents = async (payload) => {
    try {



        const newEvent = {
            ...payload,
            createdAt: new Date(),
            status: "active",
        };

        const result = await eventsCollection.insertOne(newEvent);

        if (result.acknowledged) {
            return {
                success: true,
                message: `Event created successfully with ID: ${result.insertedId.toString()}`
            };
        } else {
            return {
                success: false,
                message: "Failed to acknowledge the insert operation."
            };
        }
    } catch (error) {
        console.error("Error posting event:", error);
        return {
            success: false,
            message: error.message || "Something went wrong, try again later"
        };
    }
}

export const getEvents = async () => {
    try {

        const result = await eventsCollection.find({}).sort({ createdAt: -1 }).toArray();

        return {
            success: true,
            data: JSON.parse(JSON.stringify(result))
        };
    } catch (error) {
        return {
            success: false,
            message: "Failed to fetch events",
        };
    }
};