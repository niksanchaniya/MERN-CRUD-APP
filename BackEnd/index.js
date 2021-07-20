const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const route = require("./route/routes");
const mongoose = require("mongoose");
const port = 5000;
const URL = 'mongodb://user:user123@crud-shard-00-00.ny3qy.mongodb.net:27017,crud-shard-00-01.ny3qy.mongodb.net:27017,crud-shard-00-02.ny3qy.mongodb.net:27017/PROJECT?ssl=true&replicaSet=atlas-2hbh07-shard-0&authSource=admin&retryWrites=true&w=majority';


app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use("/user", route);


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    app.listen(port, () => {
        console.log(`server is runnig at ${port}`);
    })
}).catch((error) => {
    console.log("error:", error.message);
});