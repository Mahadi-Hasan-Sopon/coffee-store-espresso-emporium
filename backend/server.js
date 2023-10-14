const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //   routes

    app.get("/", (req, res) =>
      res.send("<h1><center>Hello from server</center></h1>")
    ); 

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You have successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () =>
  console.log(`server running on Port: ${port}. Visit-- localhost:${port}`)
);
