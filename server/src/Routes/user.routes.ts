import express from "express";
import { allUser, createUser} from "../Controllers/User.controller";
import { checkIfAuthenticated } from "../middlewares/userMiddleware";

const usersRouter = express.Router();

usersRouter.get("/users", allUser);

usersRouter.post("/adduser", createUser);

export default usersRouter;