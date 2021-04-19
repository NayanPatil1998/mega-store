import { Request, Response } from "express";
import { IOrder } from "../Models/Order";
import Order from "../Models/Order";

export const addOrder = async (req: Request, res: Response) => {
  const { orderId, status, amount, products, date, address, uid } = req.body;
  try {
    const order: IOrder = new Order({
      orderID: orderId,
      status: status,
      amount: amount,
      products: products,
      address: address,
      date: date,
      uid: uid,
    });
    order.save((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(order);
      }
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
};
