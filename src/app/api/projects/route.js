"use server"
import { collection, dbConnect } from "@/app/lib/dbConnect"

const projectsCollection = await dbConnect(collection.PROJECTS);

export const postProjects = async (payload) => {
    console.log("payload is", payload)
    const newprojects = {
        ...payload, createdAt: new Date(), status: "pending",
    }
    const result = await projectsCollection.insertOne(newprojects)
    console.log('result is', result)
    if (result.acknowledged) {
        return {
            success: true,
            message: `projects created with ${result.insertedId.toString()}`
        }
    } else {
        return {
            success: false,
            message: "Something went wrong, try again later"
        }
    }
}

export const getProjects = async () => {
    try {

        const result = await projectsCollection.find({}).sort({ createdAt: -1 }).toArray();

        return {
            success: true,
            data: JSON.parse(JSON.stringify(result))
        };
    } catch (error) {
        return {
            success: false,
            message: "Failed to fetch projects",
        };
    }
};