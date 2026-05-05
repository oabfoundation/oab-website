import { collection, dbConnect } from "./dbConnect";

export const getEvents = async (page = 1, limit = 12) => {
  try {
    const skip = (page - 1) * limit;
    const eventsCollection = await dbConnect(collection.EVENTS);

    const result = await eventsCollection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await eventsCollection.countDocuments({});

    return {
      success: true,
      data: JSON.parse(JSON.stringify(result)),
      total,
    };
  } catch (error) {
    console.error("❌ Event Fetch Error:", error);
    return { success: false, data: [], total: 0 };
  }
};