import { Request, Response } from "express";
import userModel, { IUser } from "../Models/user.model";


export const allUser = async (req: Request, res: Response) => {
    const users: IUser[] = await userModel.find({},(err) => console.error(err))
    
    res.json(users)
}