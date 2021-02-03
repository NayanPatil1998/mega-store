import { Request, Response } from "express";
import User, { IUser } from "../Models/user.model";
import {auth} from 'firebase-admin'

export const allUser = async (req: Request, res: Response) => {
    const users: IUser[] = await User.find({},(err) => console.error(err))

    res.json(users)
}

export const addUser = async (req: Request, res: Response) => {
  const { name, email, phone, password } = req.body;

  console.log(email)

  await auth()
  .createUser({
      email: email,
      phoneNumber:phone,
      emailVerified: false,
      displayName: name,
      password : password,
      disabled: false
  }).then((userData) => {
    const user : IUser = new User({
        name: name,
        email: email,
        phone: phone,
        uid: userData.uid
    })


    user.save((err: any) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(userData)
        }
    })

  })
  .catch((err) => {
      res.status(500).send(err.message)
  })
//   res.json(user);
};
