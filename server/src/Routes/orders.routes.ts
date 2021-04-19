import express from "express";
import {addOrder} from "../Controllers/Order.controller";
import {checkIfAuthenticated} from "../middlewares/userMiddleware";

const ordersRoutes = express.Router();

ordersRoutes.post("/orders", checkIfAuthenticated , addOrder);


export default ordersRoutes;