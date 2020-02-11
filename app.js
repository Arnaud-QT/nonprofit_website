const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const {NonProfit} = require("./Models/index");
const cors = require("cors");

app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(cors());

// TEST END POINT
app.get("/", (request, response) => {
    response.send("Hello World");
  });

  // CREATE NONPROFIT END POINT
app.post("/api/v1/create/nonprofit", (req, res) => {
    let newNonProfit = new NonProfit(req.body);
  
    newNonProfit.save((err, response) => {
      !err ? res.status(201).send(response) : res.send(err);
    });
  });

// GET ALL ACTIVE NON PROFIT END POINT
app.get("/api/v1/get/all/active", (req, res) => {
    NonProfit.find({ is_active : true}, (err, response) => {
      !err ? res.status(200).send(response) : res.send(err);
    });
  });

// GET NON PROFIT END POINT
app.get("/api/v1/get/nonprofit/:nonprofitid", (req, res) => {
    NonProfit.findById(req.params.nonprofitid, (err, response) => {
    !err ? res.status(200).send(response) : res.send(err);
    })
  });

//UPDATE NON PROFIT END POINT
app.put("/api/v1/update/nonprofit/:nonprofitid", (req, res) => {
    NonProfit.findByIdAndUpdate(
      req.params.nonprofitid, 
      { $set: req.body },
      { new: true },
      (err, response)=>{
        !err ? res.status(200).send(response) : res.send(err);
      });
  });

// DELETE NO PROFIT END POINT
app.delete("/api/v1/delete/nonprofit/:nonprofitid", (req, res) => {
    NonProfit.findByIdAndUpdate(
      req.params.nonprofitid,
      { $set: {is_active: false}},
      { new : true },
      (err, response)=>{
        !err ? res.status(200).send(response) : res.send(err);
      });
  })
  
  app.listen(PORT, err => {
    if (!err) {
      console.log(`Sever on port ${PORT}`);
    }
  });