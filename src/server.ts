import 'reflect-metadata';

import express, { json } from 'express';
import routes from './routes';
import './database/index';
import cors from 'cors';

const app = express()

app.use(cors());
app.use(json());

app.use(routes)
app.listen(3333, ()=>{
    console.log('Api do findPet online na porta 3333');
}) 