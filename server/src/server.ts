import express from "express";
import cors from "cors";
import initdb from "./database/db";
import usersRouter from "./Routes/user.routes";
var morgan = require("morgan");
require("dotenv").config();
import * as admin from "firebase-admin";
import productRouter from "./Routes/product.routes";
import categoryRouter from "./Routes/category.routes";
import paymentRoutes from "./Routes/payment.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use("/api/payment", paymentRoutes );
app.use("/api", usersRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);

initdb();

app.listen(process.env.PORT, () =>
  console.log("Server is listening on " + process.env.PORT)
);