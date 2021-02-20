import { Request, Response } from "express";
import User, { IUser } from "../Models/user.model";

export const allUser = async (req: Request, res: Response) => {
  const users: IUser[] = await User.find({}, (err) => console.error(err));

  res.json(users);
};

export const addUser = async (req: Request, res: Response) => {
  const { name, email, uid } = req.body;

  console.log(email);
  try {
    const user: IUser = new User({
      name: name,
      email: email,
      uid: uid,
    });

    user.save((err: any) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(user);
      }
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
  //   res.json(user);
};
