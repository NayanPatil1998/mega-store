import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import initdb from './database/db';
import usersRouter from './Routes/user.routes';
var morgan = require('morgan')
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'))
app.use('/api', usersRouter);

initdb();














app.listen(process.env.PORT, () => console.log("Server is listening on " + process.env.PORT) );
