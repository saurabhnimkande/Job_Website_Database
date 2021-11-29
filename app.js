const express= require('express');
const connect = require("./configs/db")

const jobController = require("./controllers/job.controller");
const skillController = require("./controllers/skill.controller");

const app = express();
app.use(express.json());

app.use("/jobs",jobController);
app.use("/skills",skillController);


app.listen(2525,async () => {
    await connect();
    console.log("listening on port 2525");
})

