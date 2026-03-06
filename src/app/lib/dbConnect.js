const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@oabfoundation.w5cbawy.mongodb.net/?appName=oabfoundation`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const collection = {
  PROJECTS: "projects",
  EVENTS: "events",
};

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const dbname = process.env.DB_NAME;

export const dbConnect = async (cname) => {
  return client.db(dbname).collection(cname);
};
