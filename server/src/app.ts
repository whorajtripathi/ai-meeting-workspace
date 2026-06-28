//  Contains
//->Express app
//->Middleware
//->Routes

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(helmet());                      //Helmet automatically adds security headers.
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1",routes);

export default app;