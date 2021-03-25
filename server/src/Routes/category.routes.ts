import express from "express";
import { addCategory, allCategories } from "../Controllers/category.controller";

const categoryRouter = express.Router();

categoryRouter.get("/categories", allCategories);

categoryRouter.post("/category", addCategory);

export default categoryRouter;
