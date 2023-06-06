const express = require("express");
const colors = require("colors");
require("dotenv").config();
const cors = require("cors");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;
const app = express();
connectDB();
app.use(cors({ origin: "http://localhost:3001" }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
if (process.env.PORT) {
  app.listen(port, console.log(`Server running on port ${port}`));
}

module.exports = app;
