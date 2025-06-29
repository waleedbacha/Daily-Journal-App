import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './db.js';
import journalRoutes from './routes/journalRoutes.js';
import cors from 'cors';


dotenv.config();
await dbConnection();

const app = express();

app.use(cors());;
app.use(express.json());
app.use('/api' , journalRoutes)

app.listen(process.env.PORT , () => {
    console.log(`Server Runiing On PORT: ${process.env.PORT}`);
});