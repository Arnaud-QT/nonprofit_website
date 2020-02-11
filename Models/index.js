const mongoose = require("mongoose");
const bdUrl = "mongodb+srv://Arnaud:simple@cluster0-4kyfe.mongodb.net/Incubators?retryWrites=true&w=majority";
const NonProfit = require("./nonprofit");

mongoose.connect(bdUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
    !err ? console.log("Connection Successfully Established") : console.log(err);
});

module.exports = {
    NonProfit
};