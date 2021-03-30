import { Request, Response } from "express";
import User, { IUser } from "../Models/user.model";
import admin from "../firebase";

export const allUser = async (req: Request, res: Response) => {
  const users: IUser[] = await User.find({}, (err) => console.error(err));

  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  admin.auth().createUser(
      {
        displayName: name,
        email: email,
        emailVerified: false,
        password: password,
        disabled: false,

      }
  ).then((user) => {
    admin.auth().createCustomToken(user.uid).then((customToken) => {
      res.status(200).send(customToken);
    }).catch((err) => {
      res.status(500).send(err)
    })
  }).catch((err) => {
    res.status(500).send(err)
  })


}

export const addUser = async (name: string, email: string, uid: string) => {
  try {
    const user: IUser = new User({
      name: name,
      email: email,
      uid: uid,
    });

    user.save((err: any) => {
      if (err) {

      } else {

      }
    });
  } catch (err) {

  }
  //   res.json(user);
};