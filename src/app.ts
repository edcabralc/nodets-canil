import express from "express";
import mustache from "mustache-express";
import dotenv from "dotenv";
import path from "path";

import mainRoutes from "./routes/index";

dotenv.config();

const app = express();

app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({extended: true}));

app.use(mainRoutes);
app.use((req, res) => res.send("Página não econtrada!"));

app.listen(process.env.PORT);
