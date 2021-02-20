import * as Express from "express";
import admin from "../firebase";

export const checkIfAuthenticated = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    console.info("Token ======> ", token);
    try {
      await admin.auth().verifyIdToken(token);
      return next();
    } catch (error) {
      return res.status(401).send({
        error: "You are not authorized to make this request",
      });
    }
  }
};
