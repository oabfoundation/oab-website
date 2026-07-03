const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;
export const collection = {
  PROJECTS: "projects",
  EVENTS: "events",
  UPCOMINGEVENT: "UpcomingEvents",
  GENERALMEMBER: "GeneralMember",
  COMMITTEE: "Committee",
  BOARDOFDIRECTOR: "BoardOfDirector",
  LEADER: "Leader",
  REFERENCE: "Reference",
  MOMENTS: "Moments",
  TESTIMONIALS: "Testimonials"
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
