const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const db = require("./config/keys").mongoURI;

const expressGraphQL = require("express-graphql");
const User = require("./models/user");
const schema = require("./schema/schema");

mongoose
  .connect(
    db,
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.use(bodyParser.json());

app.listen(5000, () => console.log("Server is running on port 5000"));