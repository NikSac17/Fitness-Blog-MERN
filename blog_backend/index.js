const express = require("express");
const connectToMongo=require("./db");
var cors = require("cors");
connectToMongo();

const port= process.env.PORT || 5000;
const app=express();

app.use(cors());
app.use(express.json());

//available routes
app.use("/api/auth",require("./routes/auth"));
app.use("/api/articles",require("./routes/articles"));
app.use("/api/notes",require("./routes/notes"));
app.use("/api/contact",require("./routes/contact"));

app.listen(port,()=>{
    console.log(`Backend running... In port number ${port} `);
})