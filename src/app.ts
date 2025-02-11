import express, { Response } from 'express';
import router from './routes';
import 'reflect-metadata';
import { AppDataSource } from './config/dataSource';

const app = express();
app.use(express.json());
router(app);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
  })
  .catch((erro) => {
    console.log('Error connecting to the database:', erro);
  });
export default app;
