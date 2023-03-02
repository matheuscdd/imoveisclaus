import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import routes from "./routes";

const app: Application = express();
app.use(express.json());

app.use("/users", routes.user);
app.use("/login", routes.session);
app.use("/categories", routes.category);


app.use(handleErrors);

export default app;