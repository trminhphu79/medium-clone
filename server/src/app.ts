import express from 'express'
import cors from 'cors'


const app = express();

app.use(cors());
app.use(express.json());

app.use('/', (req: any, res: any) => {
  res.status(404).json({ message: 'Not found' });
})

export default app