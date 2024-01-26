const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require("cors");


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://gaganraghav143:ZtlT3xQO0OShZvMc@cluster0.ireymdk.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected to database"))
  .catch(() => console.log("Could not connect to database"));


app.get("/getUsers", async (req, res) => {
        const users = await UserModel.find({}).exec();
        res.json(users);
      
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
  
    res.json(user);
  });

app.listen(3001, () => {
  console.log("Server runs perfectly!");
});
