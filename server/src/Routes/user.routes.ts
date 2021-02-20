import express from "express";
import { addUser, allUser } from "../Controllers/User.controller";
import { checkIfAuthenticated } from "../middlewares/userMiddleware";

const usersRouter = express.Router();

usersRouter.get("/users", allUser);

usersRouter.post("/adduser", checkIfAuthenticated, addUser);

export default usersRouter;
