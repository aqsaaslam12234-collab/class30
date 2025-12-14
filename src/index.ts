import dotenv from 'dotenv'; 
import express from 'express';
import cors from 'cors';
import StudentRoutes from './routes/StudentRoutes';
import connectDB from './config/db';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/students', StudentRoutes);


 const PORT = process.env.PORT || 5000;
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

app.listen(PORT, () => {
// app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});     
export default app;
