import Express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

/* Routers */

dotenv.config();

export const server = Express();
export default server;

server.use(cors());
server.use(Express.urlencoded({ extended: true }));
