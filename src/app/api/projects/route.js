"use server";
import { collection, dbConnect } from "@/app/lib/dbConnect";

const projectsCollection = await dbConnect(collection.PROJECTS);

export const postProjects = async (payload) => {
  const newprojects = {
    ...payload,
    createdAt: new Date(),
  };
  const result = await projectsCollection.insertOne(newprojects);

  if (result.acknowledged) {
    return {
      success: true,
      message: `projects created with ${result.insertedId.toString()}`,
    };
  } else {
    return {
      success: false,
      message: "Something went wrong, try again later",
    };
  }
};