import { collection, dbConnect } from "./dbConnect";





export const getProjects = async () => {
  try {
    
const projectsCollection = await dbConnect(collection.PROJECTS);
    const result = await projectsCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(result)),
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch projects",
    };
  }
};