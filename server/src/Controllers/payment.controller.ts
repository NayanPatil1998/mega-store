import {Request, Response} from "express";

export const createPaymentIntent = (req: Request, res: Response) => {
    const {email, amount} = req.query;
    console.info(email, amount);
    res.json({})
}