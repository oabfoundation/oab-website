import { collection, dbConnect } from "./dbConnect";

export const getProjects = async (page = 1, limit = 12) => {
  try {
    const skip = (page - 1) * limit;

    const projectsCollection = await dbConnect(collection.PROJECTS);

    const result = await projectsCollection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await projectsCollection.countDocuments({});

    return {
      success: true,
      data: JSON.parse(JSON.stringify(result)),
      total,
    };
  } catch (error) {
    console.error("❌ ERROR:", error); // 👈 এইটা দেখ
    return {
      success: false,
      data: [],
      total: 0,
    };
  }
};