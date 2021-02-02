import express from 'express';
import { allUser } from '../Controllers/User.controller';

const usersRouter = express.Router();

usersRouter.get('/users', allUser);




export default usersRouter;