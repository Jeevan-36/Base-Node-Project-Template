import { PORT,logger } from "./config/index.js";
import express from 'express';
import apiRoutes from './routes/index.js'
const app=express();

app.use('/api',apiRoutes);
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})