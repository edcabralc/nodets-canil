import express, {Request, Response} from "express";
import mustache from "mustache-express";
import path from "path";
import dotenv from "dotenv";

import mainRouter from "./routes/mainRoutes";

dotenv.config();

const app = express();

app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({extended: true}));

app.use(mainRouter);

app.listen(process.env.PORT);
