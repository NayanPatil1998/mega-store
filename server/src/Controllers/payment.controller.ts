import {Request, Response} from "express";
import { stripe } from "../server";

export const  createPaymentIntent = async (req: Request, res: Response) => {

    if(!req.query.amount || !req.query.email ){
        res.status(401);
    }
    const amount = req.query.amount !;
    const email = req.query.email !;

    console.log(amount)

    const paymentintent = await stripe.paymentIntents.create({
        currency: 'inr',
        amount: +amount * 100,
        payment_method_types: ['card'],
        receipt_email: email.toString()
    }).then((response) => {
        console.log(response.client_secret);
        res.status(200).json({
            secret_id: response.client_secret,
        })
    })
}