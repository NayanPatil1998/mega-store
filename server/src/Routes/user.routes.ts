import express from 'express';
import { addUser, allUser } from '../Controllers/User.controller';

const usersRouter = express.Router();

usersRouter.get('/users', allUser)

usersRouter.post('/adduser', addUser)



export default usersRouter;