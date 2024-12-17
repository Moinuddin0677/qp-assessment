import express from 'express';
import cors from 'cors';
import adminRoutes from './routes/admin';
import userRoutes from './routes/user';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Welcome to the Grocery app backend');
})

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
