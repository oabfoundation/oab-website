const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DB_URI;
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
