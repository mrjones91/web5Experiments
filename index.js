//node (express) api server for todo app
// with dwn 

//import myWeb5 from './web5.js';
//import { Web5 } from "@web5/api";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); 


const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.get('/', (req, res) => res.send('idk'));

app.listen(PORT, () => console.log('we live'));

//import Web5 from '@web5/api';

console.log('hello world');
