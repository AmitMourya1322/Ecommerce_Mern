import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan'
import productRoutes from './routes/product.js'
import authRoutes from './routes/auth.js'
import categoryRoutes from  './routes/category.js'
import cors from 'cors'
dotenv.config()
const app = express();

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log("db error => ",err))
const port = process.env.PORT || 8000;

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.get('/',(req,res)=>{
  return res.send('<h1>Hello World</h1>')
})

app.use('/api',authRoutes)
app.use('/api',categoryRoutes)
app.use('/api',productRoutes)

app.listen(port,()=>{
  console.log('server is running on port 8000');
})