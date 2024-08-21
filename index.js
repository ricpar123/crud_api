const express = require("express");
const router = require("./router");
const { Mongoose, default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const PORT = 8000;

const app = express();


dotenv.config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router);

mongoose.connect(process.env.MONGODB_URL).then(()=> {
console.log("BD conectada y en linea!!");
})
.catch((e) => {
    console.error(e);
});
 

 
app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});