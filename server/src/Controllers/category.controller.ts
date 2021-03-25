import { Request, Response } from "express";
import Category, { ICategoryModel } from "../Models/category.model";

export const allCategories = async (req: Request, res: Response) => {
  const categories: ICategoryModel[] = await Category.find({}, () => {});
  res.json(categories);
};

export const addCategory = async (req: Request, res: Response) => {
  const { category, imageUrl } = req.body;
  try {
    const ctg: ICategoryModel = new Category({
      category: category,
      imageUrl: imageUrl,
    });

    ctg.save((err: any) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(ctg);
      }
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
