import express, { json } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'
import dotenv from 'dotenv';
import connect from './db/connect.js';
import cookieParser from 'cookie-parser';

dotenv.config();

connect();

const port = process.env.PORT;

const app = express();

app.use(express.json({limit:'50mb'}));


app.use(cors({
    origin: 'https://blog-app-mern-liard.vercel.app',
    credentials: true,
}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://blog-app-mern-liard.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(cookieParser())
app.use('/', userRoutes);
app.use('/post', postRoutes);

app.listen(port, ()=>console.log(`Server started on http://localhost:${port}`));
