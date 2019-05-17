import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import schema from "./graphql/";

const app = express();
const PORT = process.env.PORT || "4000";
const db = "mongodb://jordan:pretty1@ds157516.mlab.com:57516/talkpretty";

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Create an express server and a GraphQL endpoint
app.use('/talkpretty', 
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);
app.listen(PORT, () => console.log('Express GraphQL Server Now Running On localhost:4000/talkpretty'));