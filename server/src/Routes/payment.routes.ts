import express from 'express';
import {createPaymentIntent} from "../Controllers/payment.controller";

const paymentRoutes = express.Router();

paymentRoutes.post('/create', createPaymentIntent);


export  default  paymentRoutes;