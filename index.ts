import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import router from "./routes/routes";

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
