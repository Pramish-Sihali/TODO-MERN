import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from "path";

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();


app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

// --------------------------deployment------------------------------
// const __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }
// --------------------------deployment------------------------------

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));