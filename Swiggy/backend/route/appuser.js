const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../model/db");

const route = express.Router();

route.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  let database = await db.getDatabase();
  const collection = database.collection("appuser");
  await bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hashedpassword) => {
      const password = hashedpassword;
      let data = {
        name: name,
        email:email,
        password: password,
      };
      collection
        .insertOne(data)
        .then(() => {
          res.json("User added");
        })
        .catch((err) => res.status(400).json("Error:" + err));
    });
  });
});
module.exports = route