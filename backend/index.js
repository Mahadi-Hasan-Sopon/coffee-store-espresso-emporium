const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const port = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.luzpdwj.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const coffeeCollection = client.db("coffeesDB").collection("coffees");

    //   routes

    app.get("/coffees", async (req, res) => {
      const coffees = await coffeeCollection.find().toArray();
      res.send(coffees);
    });

    app.get("/coffees/:coffeeId", async (req, res) => {
      const id = req.params.coffeeId;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.findOne(query);
      res.send(result);
    });

    app.post("/coffees/new", async (req, res) => {
      const coffee = req.body;
      const result = await coffeeCollection.insertOne(coffee);
      res.send(result);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    });

    app.put("/coffees/update/:id", async (req, res) => {
      const id = req.params.id;
      const coffee = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedCoffee = {
        $set: {
          ...coffee,
        },
      };
      const result = await coffeeCollection.updateOne(
        filter,
        updatedCoffee,
        options
      );
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`
      );
      res.send(result);
    });

    app.delete("/coffees/:id", async (req, res) => {
      const coffeeId = req.params.id;
      const query = { _id: new ObjectId(coffeeId) };
      const result = await coffeeCollection.deleteOne(query);
      if (result.deletedCount === 1) {
        console.log("Successfully deleted one document.");
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You have successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) =>
  res.send("<h1><center>Hello from server</center></h1>")
);

app.listen(port, () =>
  console.log(`server running on Port: ${port}. Visit-- localhost:${port}`)
);
