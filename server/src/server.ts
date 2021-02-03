import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import initdb from './database/db';
import usersRouter from './Routes/user.routes';
var morgan = require('morgan')
require('dotenv').config();
import * as admin from 'firebase-admin'


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('tiny'))
app.use('/api', usersRouter);

initdb();
var serviceAccount = require("./mega-shop-8333e-firebase-adminsdk-ngtvr-991ce92110.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});













app.listen(process.env.PORT, () => console.log("Server is listening on " + process.env.PORT) );
