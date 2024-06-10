import { PrismaClient } from "@prisma/client/extension";

export const db = new PrismaClient();

// Also state this is an index.ts in a folder named db
//this db object is our portal/handle onto our database, we will use
//to create save delete fetch all kings of things

db.snippet.create({
  data: {
    title: "title",
    code: "const abc = ()=>{}",
  },
});
