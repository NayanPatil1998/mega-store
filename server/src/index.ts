import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());














app.listen(process.env.PORT, () => console.log("Server is listening on " + process.env.PORT) );
